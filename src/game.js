/* -- CREATE CLASS GAME -- */
class Game {
  constructor(gameScreen) {
    this.canvas = null;
    this.ctx = null;
    this.meteorites = [];
    this.spacecraft = null;
    this.gameIsOver = false;
    this.gameScreen = gameScreen;
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

    //document.body.addEventListener("keydown", (event) => {
    //  if (event.key === "ArrowLeft") this.spacecraft.setDirection("left");
    //  else if (event.key === "ArrowRight")
    //    this.spacecraft.setDirection("right");
    //});

    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") this.spacecraft.setDirection("left");
      else if (event.key === "ArrowRight")
        this.spacecraft.setDirection("right");
    }

    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }

  startLoop() {
    const loop = () => {
      if (this.meteorites.length < 8) {
        if (Math.random() > 0.95) {
          const randomX = Math.floor(this.canvas.width * Math.random());
          const newMeteorite = new Meteorite(this.canvas, randomX, 2);
          this.meteorites.push(newMeteorite);
        }
      }

      this.checkCollisions();

      this.spacecraft.updatePosition();
      this.spacecraft.handleScreenCollision();

      this.meteorites = this.meteorites.filter((meteorite) => {
        meteorite.updatePosition();
        return meteorite.isInsideScreen();
      });

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.spacecraft.draw();
      this.meteorites.forEach((meteorite) => {
        meteorite.draw();
      });

      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }

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
  gameOver() {
    this.gameIsOver = true;
    endGame(this.score);
  }

  updateGameStats() {
    this.score += 1;
    this.livesElement.innerHTML = this.spacecraft.lives;
    this.scoreElement.innerHTML = this.score;
  }
}
