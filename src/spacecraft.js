class Spacecraft {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.lives = lives;

    this.size = 100;

    this.x = 50;
    this.y = this.canvas.width / 2 - this.size / 2;

    this.direction = 0;
    this.speed = 5; //This multiplies 5px * 60fps which will equal to 300px
  }

  setDirection(direction) {
    if (direction === "left") this.direction = -1;
    else if (direction === "right") this.direction = 1;
  }

  updatePosition() {
    this.x += this.direction * this.speed;
  }

  handleScreenCollision() {
    const screenLeft = 0;
    const screenRight = this.canvas.width;

    const spacecraftLeft = this.x;
    const spacecraftRight = this.x + this.size;

    if (spacecraftRight >= screenRight) this.direction("left");
    else if (spacecraftLeft <= screenLeft) this.direction("right");
  }

  removeLife() {
    this.lives -= 1;
  }

  draw() {
    this.ctx.fillStyle = "#66D3FA";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  didCollide(meteorite) {
    const spacecraftLeft = this.x;
    const spacecraftRight = this.x + this.size;
    const spacecraftTop = this.y;
    const spacecraftBottom = this.y + this.size;

    const meteoriteLeft = meteorite.x;
    const meteoriteRight = meteorite.x + meteorite.size;
    const meteoriteTop = meteorite.y;
    const meteoriteBottom = meteorite.y + meteorite.size;

    const crossLeft =
      meteoriteLeft <= spacecraftRight && meteoriteLeft >= spacecraftLeft;
    const crossRight =
      meteoriteRight >= spacecraftLeft && meteoriteRight <= spacecraftRight;
    const crossBottom =
      meteoriteBottom >= spacecraftTop && meteoriteBottom <= spacecraftBottom;
    const crossTop =
      meteoriteTop <= spacecraftBottom && meteoriteTop >= spacecraftTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }
}
