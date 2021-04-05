class Spacecraft {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.lives = lives;

    this.size = 100;

    this.x = 50;
    this.y = 60;

    this.direction = 0;
    this.speed = 5;
  }

  setDirections(direction) {
    if (direction === "left") this.direction = -1;
    else if (direction === "right") this.direction = 1;
  }

  updatePosition() {
    this.x += this.direction * this.speed;
  }

  handleScreenCollision() {
    const screenTop = 0;
    const screenBottom = this.canvas.height;
  }

  removeLife() {
    this.lives -= 1;
  }

  draw() {
    const spacecraftImg = document.createElement("img");
    spacecraftImg.src = "img/SPACECRAFT-removebg-preview (1).png";
  }
}
