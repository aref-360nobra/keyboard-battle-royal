console.log("utility.js connected properly");

const alphabetString = "abcdefghijklmnopqrstuvwxyz";

function getRandomLetter() {
  const index = Math.abs(Math.floor(Math.random() * alphabetString.length));
  return alphabetString[index];
}

// console.log(getRandomAlphabet());

function switchScreen(previousScreen, nextScreen) {
  document.getElementById(previousScreen).classList.add("hidden");
  document.getElementById(nextScreen).classList.remove("hidden");
}

function playGame() {
  const randomLetter = getRandomLetter();
  console.log("your random letter is: ", randomLetter);
  document.getElementById("generated-random-letter").innerText = randomLetter;
  setStylesToRandomLetter(randomLetter, "add");
}

function setStylesToRandomLetter(idName, action) {
  const element = document.getElementById(idName);
  if (action === "add") {
    element.classList.add("text-black", "font-black", "bg-orange-400");
  } else if (action === "remove") {
    element.classList.remove("text-black", "font-black", "bg-orange-400");
  }
}

const updateScore = () => {
  const score = parseInt(document.getElementById("score").innerText);
  const updatedScore = score + 1;
  document.getElementById("score").innerText = updatedScore;
  //document.getElementById("score-count").innerText = updatedScore;
  return updatedScore;
};

function updateLives() {
  const life = parseInt(document.getElementById("life").innerText);
  if (life > 1) {
    const updatedLife = life - 1;
    document.getElementById("life").innerText = updatedLife;
  } else {
    gameOver();
  }
  return;
}

function gameOver() {
  const finalScore = updateScore(); // Call updateScore and get the updated score
  document.getElementById("score-count").innerText = finalScore; // Use the updated score directly
  switchScreen("play-ground", "score-board");
  playMusic("game-over");
}

function restartGame() {
  document
    .getElementById("play-again-btn")
    .addEventListener("click", function () {
      switchScreen("score-board", "play-ground");
    });

  document.getElementById("score").innerText = 0;
  document.getElementById("life").innerText = 5;
}

function playMusic(soundName) {
  const audio = new Audio(`assets/sounds/${soundName}.mp3`);
  audio.play();
}
