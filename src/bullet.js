class Bullet {
  constructor(canvas, positionX) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = positionX;
    this.y = 450;
    this.width = 10;
    this.height = 15;
    this.speed = 5;
  }
  //set direction of bullet to draw upwards when input
  setDirection(direction) {
    if (direction === "up") this.direction = -1;
  }

  //draw the bullet on canvas
  draw() {
    let img = document.createElement("img");
    img.src = "img/laser-bullet-img.png";
    this.ctx.img = "img";
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  //update the position of the bullet to go constantly upwards
  updatePosition() {
    this.y -= this.speed;
  }

  //checks if the bullet is inside the screen
  isInsideScreen() {
    const bulletTop = this.y;
    const screenTop = 0;
    const isInside = bulletTop > screenTop;
    return isInside;
  }

  //collision logic between bullet with meteorite
  didCollide(meteorite) {
    const bulletLeft = this.x;
    const bulletRight = this.x + this.width;
    const bulletTop = this.y;
    const bulletBottom = this.y + this.height;

    const meteoriteLeft = meteorite.x;
    const meteoriteRight = meteorite.x + meteorite.size;
    const meteoriteTop = meteorite.y;
    const meteoriteBottom = meteorite.y + meteorite.size;

    const crossLeft =
      meteoriteLeft <= bulletRight && meteoriteLeft >= bulletLeft;
    const crossRight =
      meteoriteRight >= bulletLeft && meteoriteRight <= bulletRight;
    const crossBottom =
      meteoriteBottom >= bulletTop && meteoriteBottom <= bulletBottom;
    const crossTop = meteoriteTop <= bulletBottom && meteoriteTop >= bulletTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }
}
