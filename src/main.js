/* -- DECLARING VARIABLES TO WORK WITH -- */
let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

/* -- AUDIO -- */

const gameSound = document.querySelector('#game-sound');
const gameOverSound = document.querySelector('#game-over-sound');

/* -- CREATE DOM ELEMENTS IN FROM STRING IN buildDom -- */

function buildDom(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  return tempDiv.children[0];
}

/* -- CREATE SPLASH SCREEN -- */
function createSplashScreen() {
  splashScreen = buildDom(`
  <main class="container">
      <div class="title">
        <h1 class="title">SPACECRAFT BATTLE</h1>
        <button><span>START</span></button>
      </div>

      <div class="list box">
        <div class="how-to-title">
          <h2>How to play:</h2>
        </div>
        <div class="how-to-list">
          <ol>
            <li>Press Start Button</li>
            <li>Start flying with the arrow keys</li>
            <li>Avoid the meteorites</li>
            <li>Hit the highest score</li>
          </ol>
        </div>
      </div>
    </main>
    `);

  document.body.appendChild(splashScreen);

  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", startGame);
}

/* -- REMOVE SPLASH SCREEN -- */
function removeSplashScreen() {
  splashScreen.remove();
}

/* -- CREATE GAME SCREEN -- */
function createGameScreen() {
  gameScreen = buildDom(`
  <main id= "game" class="container-1">
    <header class="game-header">
      <div class="lives">
        <span class="label">Lives: </span>
        <span class="value"></span>
      </div>

      <div class="score">
        <span class="label">Miles: </span>
        <span class="value"></span>
      </div>
    </header>

    <div>
      <div class="canvas-container">
        <canvas></canvas>
      </div>
    </div>
  </main>
    `);

  document.body.appendChild(gameScreen);
  gameSound.loop = true;
  gameSound.volume = 1;
  gameSound.currentTime = 0;
  gameSound.play();
  return gameScreen;
}

/* -- REMOVE GAME SCREEN -- */
function removeGameScreen() {
  gameScreen.remove();
  gameSound.pause();
}

/* -- CREATE GAME OVER SCREEN -- */
function createGameOverScreen(score) {
  gameOverScreen = buildDom(`
    <main class="game-over">
        <h1>GAME OVER</h1>
        <p>Miles: <span>${score}</span></p>
        <button>TRY AGAIN!</button>
    </main>
    `);

  const button = gameOverScreen.querySelector("button");
  button.addEventListener("click", startGame);

  document.body.appendChild(gameOverScreen);
  gameOverSound.loop = false;
  gameOverSound.volume = 1;
  gameOverSound.currentTime = 0;
  gameOverSound.play();
}

/* -- REMOVE GAME OVER SCREEN -- */
function removeGameOverScreen() {
  gameOverScreen.remove();
}

/* -- GAME STATUS/START/GAME OVER -- */
function startGame() {
  removeSplashScreen();
  if (gameOverScreen) {
    removeGameOverScreen();
  }
  createGameScreen();

  game = new Game(gameScreen);
  game.start();
}

function endGame(score) {
  removeGameScreen();
  createGameOverScreen(score);
}

window.addEventListener("load", createSplashScreen);
