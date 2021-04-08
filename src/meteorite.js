class Meteorite {
  constructor(canvas, positionX, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    //define size and position of meteorite
    this.size = 45;
    this.x = positionX;
    this.y = -20;

    //assign a dinamic speed to the speed of meteorite without hardcoding it
    this.speed = speed;
  }

  // draw the meteorite in the canvas with the selected image
  draw() {
    let img = document.createElement("img");
    img.src = "img/METEORITE_IMG-removebg-preview.png";
    this.ctx.img = "img";
    this.ctx.drawImage(img, this.x, this.y, this.size, this.size);
  }

  //update position of meteorite to be drawn from top to bottom of the canvas
  updatePosition() {
    this.y += this.speed;
  }

  //check if meteorite is inside the screen
  isInsideScreen() {
    const meteoriteTop = this.y + this.size;
    const screenBottom = this.canvas.height;
    const isInside = meteoriteTop < screenBottom;
    return isInside;
  }
}
