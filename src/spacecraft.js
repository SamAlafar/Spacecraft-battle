class Spacecraft {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.lives = lives;
    this.size = 100;
    this.x = 50;
    this.y = 60;
  }
}
