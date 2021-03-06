class Meteorite {
  constructor(canvas, positionX, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.size = 45;
    this.x = positionX;
    this.y = -20;

    this.speed = speed;
  }

  draw() {
    console.log('draw');
    let img = document.createElement("img");
    img.src = "img/METEORITE_IMG-removebg-preview.png";
    this.ctx.img = "img";
    this.ctx.drawImage(img, this.x, this.y, this.size, this.size);

    /*this.ctx.fillStyle = "#FFFFFF";

    this.ctx.fillRect(this.x, this.y, this.size, this.size);*/
  }

  updatePosition() {
    this.y += this.speed;
  }

  isInsideScreen() {
    const meteoriteTop = this.y + this.size;
    const screenBottom = this.canvas.height;
    const isInside = meteoriteTop < screenBottom;
    return isInside;
  }
}
