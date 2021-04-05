class Meteorite {
  construcor(canvas, positionX, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 20;
    this.y = this.canvas.height;
    this.x = positionX;

    this.speed = speed;
  }

  draw() {
    this.ctx.fillStyle = "#FF6F27";

    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  updatePosition() {
    this.y += this.speed;
  }

  isInsideScreen() {
    const meteoriteTop = this.y + this.size;
    const screenBottom = 0;
    const isInside = meteoriteTop > screenBottom;
    return isInside;
  }
}
