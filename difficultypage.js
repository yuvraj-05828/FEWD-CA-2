// const play = document.getElementById("easy-btn");

// const mainAudio = document.getElementById("main-audio");
// const buttonAudio = document.getElementById("button-audio");
//     mainAudio.volume=0.5;
//     mainAudio.play();

// play.onclick = () => {
//   location.href = "./easy-page.html";
//   buttonAudio.play();
// };

// const playMedium = document.getElementById("medium-btn");

// playMedium.onclick = () => {
//   location.href = "./medium-page.html";
//   buttonAudio.play();
// };


// const playHard = document.getElementById("hard-btn");

// playHard.onclick = () => {
//   location.href = "./hard-page.html";
//   buttonAudio.play();
// };

const mainAudio = document.getElementById("main-audio");
const buttonAudio = document.getElementById("button-audio");
mainAudio.play();
mainAudio.volume = 0.5; // Adjust the volume as needed

const playEasy = document.getElementById("easy-btn");
playEasy.addEventListener("click", () => {
  buttonAudio.play();
  location.href = "./easy-page.html";
});

const playMedium = document.getElementById("medium-btn");
playMedium.addEventListener("click", () => {
  buttonAudio.play();
  location.href = "./medium-page.html";
});

const playHard = document.getElementById("hard-btn");
playHard.addEventListener("click", () => {
  buttonAudio.play();
  location.href = "./hard-page.html";
});
