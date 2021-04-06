**SPACECRAFT-BATTLE**

**Description**

Spacecraft-battle is an immersive game where the player, in our case the pilot, will control and fly the spacecraft using the arrows to control it. The main aim is to avoid hitting the meteorites that will appear in the space. The game will be over when the fuel (lives) of our spacecraft is burnt out. 



**MVP (DOM - CANVAS)**

*CANVAS*, in this game the player will be able to control the vehicle and move around. 



**Backlog**

**Data structure**

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/styles.css">

    <title>Spacecraft Battle</title>
</head>
<body>
    <script src="./src/meteorite.js"></script>
    <script src="./src/spacecraft.js"></script>
    <script src="./src/game.js"></script>
    <script src="./src/main.js"></script>
</body>
</html>
```

**styles.css**

```css
Apply CSS styles
```



**main.js**

```javascript
buildDom () {
}
createSplashScreen () {
}
removeSplashScreen () {
}
createGameScreen () {
}
removeGameScreen () {
}
createGameOverScreen () {
}
removeGameOverScreen () {
}
startGame () {
}
endGame () { 
}
```

**game.js**

```javascript
class Game {
  this.canvas;
	this.ctx;
	this.meteorites;
	this.spacecraft;
	this.gameIsOver;
	this.gameScreen;
	this.score;
	this.livesElement;
	this.scoreElement;
}

function start() {
  function handleKeyDown () {
  }
  function startLoop () {
  }
  this.checkCollisions();
}

function startLoop() {
  checkCollisions ();
  updatePosition();
  clearRect();
  draw();
  gameOver();
  handleScreenCollision();
  updateGameStats();
}
}
```

**spacecraft.js**

```javascript
class Spacecraft {
	constructor() {
	}
	setDirection() {
	} 
	updatePosition() {
	}
	handleScreenCollision() {
	}
	removeLife() {
	}
	draw() {
	}
	didCollide() {
	}
}
```

**meteorites.js**

```javascript
class Meteorites {
	constructor () {
	}
	draw() {
	}
	updatePosition() {
	}
	isInsideScreen() {
	}
}
```



**Links**

**Trello**

Link: https://trello.com/b/jMgJ0Bvg/ironhack-project-1

**Git**

Link: https://github.com/SamAlafar/Spacecraft-battle

**Slides**

Link: https://drive.google.com/file/d/1wBpoEfwxnGzBLxztdxO80C2nL_WIUgvU/view?usp=sharing