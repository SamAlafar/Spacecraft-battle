class Spacecraft {
  constructor(canvas, lives) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    //declare the lives to a dinamic value
    this.lives = lives;

    //defining the width and height of the spaceraft
    this.width = 50;
    this.height = 100;

    //give the coordinates to be drawn on the canvas
    this.x = 350;
    this.y = 450;

    //initializing the direction of the spacecraft
    this.direction = 0;

    //setting the speed of the spacecraft to move on the horizontal axis
    this.speed = 1.5; //This multiplies 5px * 60fps which = 300px
  }

  //set the logic of the movement of spacecraft
  setDirection(direction) {
    if (direction === "left") this.direction = -1;
    else if (direction === "right") this.direction = 1;
  }

  //updates the position of the aircraft depending on the speed given
  updatePosition() {
    this.x += this.direction * this.speed;
  }

  //handles the collision of the x axis of the spacecraft with the canvas
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

  //function that removes the lives of the spacecraft when hitting a meteorite (called on line 116 of game.js)
  removeLife() {
    this.lives -= 1;
  }

  //draw the spacecraft on canvas
  draw() {
    let img = document.createElement("img");
    img.src = "../img/spacecraft.png";
    this.ctx.img = "img";
    this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  //collision logic between meteorite and spacecraft
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
