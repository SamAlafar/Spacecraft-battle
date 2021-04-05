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
  }

  startLoop() {
    const loop = function () {
      if (Math.random() > 0.95) {
        const randomX = Math.floor(this.canvas.width * Math.random());
        const newMeteorite = new Meteorite(this.canvas, randomX, 5);
        this.meteorites.push(newMeteorite);
      }

      this.checkCollisions();
    };
  }

  checkCollisions() {
    
    this.spacecraft.didCollide(meteorite);
  }
}
