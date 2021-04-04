/* -- DECLARING VARIABLES TO WORK WITHH -- */
let game;
let splashScreen;
let gameScreen;
let gameOverScreen;

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
        <div>
            <h1 class="title">SPACECRAFT BATTLE</h1>
            <button><span>START</span></button>
        </div>

        <div class="list box">
            <h2>How to play:</h2>
            <ol>
                <li>Press Start Button</li>
                <li>Start flying with the arrow keys</li>
                <li>Avoid the meteorites</li>
                <li>Hit the highest score</li>
            </ol>
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
    <main class="game-container">
        <header>
            <div class="lives">
                <span class="label">Lives:</span>
                <span class="value"></span>
            </div>

            <div class="score">
                <span class="label">Miles:</span>
                <span class="value"></span>
            </div>

            <div class="canvas-container">
                <canvas></canvas>
            </div>
        </header>
    </main>
    `);

  document.body.appendChild(gameScreen);
  return gameScreen;
}

/* -- REMOVE GAME SCREEN -- */
function removeGameScreen() {
  gameScreen.remove();
}

/* -- CREATE GAME OVER SCREEN -- */
function createGameOverScreen(score) {
  gameOverScreen = buildDom(`
    <main>
        <h1>GAME OVER</h1>
        <p>Miles: <span>${score}</span></p>
        <button>START AGAIN</button>
    </main>
    `);

  const button = gameOverScreen.querySelector("button");
  button.addEventListener("click", startGame);

  document.body.appendChild(gameOverScreen);
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
  createGameOverScreen(scpre);
}

window.addEventListener("load", createSplashScreen);
