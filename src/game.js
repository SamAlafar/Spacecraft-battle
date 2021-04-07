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
    this.livesElement = this.gameScreen.querySelector(".lives .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    this.spacecraft = new Spacecraft(this.canvas, 10);

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
    //creates random meteorites on canvas
    const loop = () => {
      if (this.meteorites.length < 10) {
        if (Math.random() > 0.97) {
          const randomX = Math.floor(this.canvas.width * Math.random());
          const newMeteorite = new Meteorite(this.canvas, randomX, 1);
          this.meteorites.push(newMeteorite);
        }
      }
      //checks collisions between spacecraft and meteorites
      this.checkCollisions();

      // check collisions between bullet and meteorites
      this.checkBulletCollisions();

      //updates spacecraft position when key is pressed
      this.spacecraft.updatePosition();
      this.spacecraft.handleScreenCollision();

      //filters the array of meteorites and updates its positions
      this.meteorites = this.meteorites.filter((meteorite) => {
        meteorite.updatePosition();
        return meteorite.isInsideScreen();
      });

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
      // this function updates the game statistics
      this.updateGameStats();
    };
    loop();
  }

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

  checkBulletCollisions() {
    this.meteorites.forEach((meteorite) => {
      this.bullets.forEach((bullet) => {
        if (bullet.didCollide(meteorite)) {
          meteorite.y = 0 - meteorite.size;
        }
      });
    });
    //console.log(checkBulletCollisions());
  }

  gameOver() {
    this.gameIsOver = true;
    endGame(this.score);
  }

  //method that updates the score of the game
  updateGameStats() {
    this.score += 1;
    this.livesElement.innerHTML = this.spacecraft.lives;
    this.scoreElement.innerHTML = this.score;
  }
}
