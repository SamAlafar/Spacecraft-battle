/* -- CREATE CLASS GAME -- */
class Game {
  constructor(gameScreen) {
    this.canvas = null;
    this.ctx = null;
    this.meteorites = [];
    this.spacecraft = null;
    this.gameIsOver = false;
    this.gameScreen = gameScreen;
    this.bullets = [];
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
  }
  start() {
    //select the lives and score elements
    this.livesElement = this.gameScreen.querySelector(".lives .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    //select the canvas and get its 2d context
    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    //setting the size of the canvas
    this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    //select the spacecraft, and draw it on canvas, with the ammount of lives given as a parameter
    this.spacecraft = new Spacecraft(this.canvas, 10);

    //inputs for controling the spacecraft and the bullet which is dinamilcally attached to the spacecraft
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") this.spacecraft.setDirection("left");
      else if (event.key === "ArrowRight")
        this.spacecraft.setDirection("right");
      else if (event.key === "ArrowUp") {
        const newBullet = new Bullet(this.canvas, this.spacecraft.x + 18.7, 1);
        this.bullets.push(newBullet);
      }
    }

    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }

  startLoop() {
    //creates random meteorites on canvas and pushes them to a new array
    const loop = () => {
      if (this.meteorites.length < 10) {
        if (Math.random() > 0.97) {
          const randomX = Math.floor(this.canvas.width * Math.random());
          const newMeteorite = new Meteorite(this.canvas, randomX, 1);
          this.meteorites.push(newMeteorite);
        }
      }

      //calls the function declared on line 106
      this.checkCollisions();

      //calls the function declared on line 121
      this.checkBulletCollisions();

      //updates spacecraft position
      this.spacecraft.updatePosition();
      this.spacecraft.handleScreenCollision();

      //filters the array of meteorites and updates the position for each meteorite
      this.meteorites = this.meteorites.filter((meteorite) => {
        meteorite.updatePosition();
        return meteorite.isInsideScreen();
      });

      // iterates over the array of bullets and updates the position for each bullet
      this.bullets.forEach((bullet) => {
        bullet.updatePosition();
        return bullet.isInsideScreen();
      });

      //clears the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // draws the spacraft in canvas
      this.spacecraft.draw();

      //draws the meteorites in canvas
      this.meteorites.forEach((meteorite) => {
        meteorite.draw();
      });

      //draws the bullet in canvas
      this.bullets.forEach((bullet) => {
        bullet.draw();
      });

      //checks if the game is not over, continues the looping
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }

      // this calls the function declared at the end of the class Game
      this.updateGameStats();
    };
    loop();
  }

  //checks the collisions between meteorites and spacecraft
  checkCollisions() {
    this.meteorites.forEach((meteorite) => {
      if (this.spacecraft.didCollide(meteorite)) {
        this.spacecraft.removeLife();

        meteorite.y = 0 - meteorite.size;

        if (this.spacecraft.lives === 0) {
          this.gameOver();
        }
      }
    });
  }

  // checks the collision between bullets and meteorites
  checkBulletCollisions() {
    this.meteorites.forEach((meteorite) => {
      this.bullets.forEach((bullet) => {
        if (bullet.didCollide(meteorite)) {
          meteorite.y = 0 - meteorite.size;
          bullet.y = 0 - bullet.y;
        }
      });
    });
  }

  // if the game is over calls the function gameOver declared in main.js
  gameOver() {
    this.gameIsOver = true;
    endGame(this.score);
  }

  //method that updates the score and lives of the game
  updateGameStats() {
    this.score += 1;
    this.livesElement.innerHTML = this.spacecraft.lives;
    this.scoreElement.innerHTML = this.score;
  }
}
