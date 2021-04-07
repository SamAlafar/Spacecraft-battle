class Spacecraft {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.lives = lives;

    this.width = 50;
    this.height = 100;

    this.x = 350;
    this.y = 450;

    this.direction = 0;
    /*this.keys = [];
    this.move = false;*/

    this.speed = 1.5; //This multiplies 5px * 60fps which will equal to 300px
  }

  //shooting

  /*shoot() {
    if (this.direction >= 1) {
      let newBullet = new Bullet(
        this.canvas,
        this.y,
        this.attack,
        this.direction
      );
      game.bullets.push(newBullet);
    } else if (this.direction <= 1) {
      let newBullet = new Bullet(
        this.canvas,
        this.y,
        this.attack,
        this.direction
      );
      game.bullets.push(newBullet);
    }
  }*/

  setDirection(direction) {
    if (direction === "left") this.direction = -1;
    else if (direction === "right") this.direction = 1;
  }

  updatePosition() {
    this.x += this.direction * this.speed;
  }

  handleScreenCollision = () => {
    const screenLeft = 0;
    const screenRight = this.canvas.width;

    const spacecraftLeft = this.x;
    const spacecraftRight = this.x + this.width;

    /*if (spacecraftRight >= screenRight) this.keyMove("left");
    else if (spacecraftLeft <= screenLeft) this.keyMove("right");*/

    if (spacecraftRight >= screenRight) this.setDirection("left");
    else if (spacecraftLeft <= screenLeft) this.setDirection("right");
  };

  removeLife() {
    this.lives -= 1;
  }

  draw() {
    let img = document.createElement("img");
    img.src = "img/SPACECRAFT-removebg-preview (1).png";
    this.ctx.img = "img";
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  didCollide(meteorite) {
    const spacecraftLeft = this.x;
    const spacecraftRight = this.x + this.width;
    const spacecraftTop = this.y;
    const spacecraftBottom = this.y + this.height;

    const meteoriteLeft = meteorite.x;
    const meteoriteRight = meteorite.x + meteorite.size;
    const meteoriteTop = meteorite.y;
    const meteoriteBottom = meteorite.y + meteorite.size;

    const crossLeft =
      meteoriteLeft <= spacecraftRight && meteoriteLeft >= spacecraftLeft;
    const crossRight =
      meteoriteRight >= spacecraftLeft && meteoriteRight <= spacecraftRight;
    //const crossBottom =
      //meteoriteBottom >= spacecraftTop && meteoriteBottom <= spacecraftBottom;
    const crossTop =
      meteoriteTop <= spacecraftBottom && meteoriteTop >= spacecraftTop;

    if ((crossLeft || crossRight) && (crossTop)) {
      return true;
    } else {
      return false;
    }
  }
}
