const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const gameLevel = document.getElementById("gameLevel");
const btnPlayer1 = document.getElementById("btnPlayer1");
const btnPlayer2 = document.getElementById("btnPlayer2");
const btnReset = document.getElementById("reset");
const btnPlayers = document.querySelector(".m-1");
let score = 0;

btnPlayer1.addEventListener("click", () => {
  score++;
  player1.textContent = score;
});

btnPlayer2.addEventListener("click", () => {
  score++;
  player2.textContent = score;
});
