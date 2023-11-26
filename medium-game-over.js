const mainAudio = document.getElementById("main-audio");
const buttonAudio = document.getElementById("button-audio");
mainAudio.play();
mainAudio.volume = 0.5;



const play = document.getElementById("game-over-medium-lvl-btn");

play.onclick = () => {
  location.href = "./difficultypage.html";
  buttonAudio.play();
};

const playGameRestart = document.getElementById("game-over-medium-btn");
``
playGameRestart.onclick = () => {
  location.href = "./medium-page.html";
  buttonAudio.play();
};

document.addEventListener('DOMContentLoaded', () => {
    const displayName = document.getElementById("nicimp");
    displayName.innerHTML = localStorage.getItem("nickname-input");

    const storedScore = localStorage.getItem('score');
    const scoreElement = document.getElementById('gameovrscr');
    scoreElement.textContent = storedScore;
});

const storedScore = localStorage.getItem('score');
const scoreElement = document.getElementById('gameovrscr');
scoreElement.textContent = storedScore;