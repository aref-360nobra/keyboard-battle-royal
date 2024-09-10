console.log("script.js connected properly");

function gameStart() {
  switchScreen("landing-page", "play-ground");
  playGame();
}

document.getElementById("play-now-btn").addEventListener("click", gameStart);

document.addEventListener("keyup", function startGame(event) {
  const generatedRandomLetter = document
    .getElementById("generated-random-letter")
    .innerText.toLowerCase();
  const randomLetterPressedByPlayer = event.key;

  console.log(randomLetterPressedByPlayer);
  console.log(generatedRandomLetter);
  if (!generatedRandomLetter) {
    return console.log("letter is not generated yet");
  }

  if (randomLetterPressedByPlayer === generatedRandomLetter) {
    console.log("you passed");
    updateScore();
  } else {
    console.log("you failed");
    updateLives();
    playMusic("wrong-key");
  }
  setStylesToRandomLetter(generatedRandomLetter, "remove");

  playGame();
});

document
  .getElementById("play-again-btn")
  .addEventListener("click", restartGame);
