**SPACECRAFT-BATTLE**

**Description**

Spacecraft-battle is an immersive game where the player, will control the spacecraft using the arrow keys to control it. The main aim is to avoid hitting the meteorites that will appear in the space, additionaly you can shoot the meteorites to clear your path. The game will be over when spacecraft has run out of lifes.



**MVP (DOM - CANVAS)**

*CANVAS*, The MVP is a game where the player moves the spacecraft and avoids the collisions with the meteorites.



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
      <audio
      id="game-sound"
      style="display: none"
      src="audio/mactonite_-_Warp_Drive_1.mp3"
    ></audio>
    <audio
      id="game-over-sound"
      style="display: none"
      src="audio/game-over.wav"
    ></audio>
    <audio
      id="bullet-sound"
      style="display: none"
      src="audio/laser-gun-19sf.mp3"
    ></audio>
    <script src="./src/meteorite.js"></script>
    <script src="./src/spacecraft.js"></script>
    <script src="./src/game.js"></script>
    <script src="./src/main.js"></script>
</body>
</html>
```

**styles.css**

```css
All CSS styles applies to the game
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