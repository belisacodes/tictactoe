//app.js FILE: The one that should be executed first where we reacb out to different html elements and store these elemets or pointers at these elements in different javascript variables contants
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let editedPlayer = 0;
let activePlayer = 0;

let currentRound = 1;

let gameIsOver = false;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];
//show the overlay
const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");

//select the only form have
const formElement = document.querySelector("form");

//errors input field
const errorsOutputElement = document.getElementById("config-errors");

//acces to the game field
const gameAreaElement = document.getElementById("active-game");
//access to active player name
const activePlayerNameElement = document.getElementById("active-player-name");

//access to the different buttons
const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");

//access to the game field elements
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");

//gameover
const gameOverElement = document.getElementById("game-over");

// click listeners btn
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

//cancel listerner btn
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

//submit listener
formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFielElement of gameFieldElements) {
//   gameFielElement.addEventListener("click", selectGameField);
// }
gameBoardElement.addEventListener("click", selectGameField);
