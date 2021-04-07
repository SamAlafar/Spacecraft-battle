class Bullet {
  constructor(canvas, positionX,) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = positionX;
    this.y = 450;
    this.width = 15;
    this.height = 20;
    this.speed = 5;
  }

  setDirection(direction) {
    if (direction === "up") this.direction = -1;
  }

  draw() {
    let img = document.createElement("img");
    img.src = "img/laser-bullet-img.png";
    this.ctx.img = "img";
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  updatePosition() {
    this.y -= this.speed;
  }

  isInsideScreen() {
    const bulletTop = this.y;
    const screenTop = 0;
    const isInside = bulletTop > screenTop;
    return isInside;
  }

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
    const crossTop =
      meteoriteTop <= bulletBottom && meteoriteTop >= bulletTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }
}
