"use strict";

const button = document.getElementById("check-btn");
let guess;
let scoreValue = Number(document.querySelector(".score").textContent);
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
let highScoreValue = Number(document.querySelector(".highscore").textContent);
const againButton = document.querySelector(".again");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let correctNumber = Math.floor(Math.random() * 50);

button.addEventListener("click", function getContent() {
  if (scoreValue >= 1) {
    guess = Number(document.querySelector(".guess").value);
    if (!guess) {
      displayMessage("No Number");
    } else if (guess !== correctNumber) {
      displayMessage(guess < correctNumber ? "Too Low" : "Too High");
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      displayMessage("Correct Number");
      document.querySelector(".number").textContent = correctNumber;

      if (scoreValue > highScoreValue) {
        score.textContent = scoreValue;
        highScore.textContent = scoreValue;

        highScoreValue = scoreValue;
      }
      console.log(scoreValue, highScoreValue);
    }
  } else {
    displayMessage("Game Over");
  }
});
againButton.addEventListener("click", function refreshGame() {
  document.querySelector("body").style.backgroundColor = "#222";
  score.textContent = "20";
  scoreValue = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  correctNumber = Math.floor(Math.random() * 50);
  console.log(correctNumber);
  document.querySelector(".number").style.width = "15rem";
});
