
document.addEventListener('DOMContentLoaded', () => {
  const displayName = document.getElementById("nicimp");
  displayName.innerHTML = localStorage.getItem("nickname-input");

  var boxes = document.querySelectorAll('.box-1-easy');
  const timerElement = document.querySelector('#timer-easy');
  const scoreElement = document.querySelector('#score-easy');

  const mainAudio = document.getElementById("main-audio");
  const flipAudio = document.getElementById("flip-audio");
  const correctAudio = document.getElementById("correct-audio");

  // console.log(boxes)
  let selectedBoxes = [];
  let gameStarted = false;
  let timeRemaining = 60; // Set the time limit for the game (in seconds)
  
  function gameCompleted() {
    // Store the score in local storage
    localStorage.setItem('score', scoreElement.textContent.split(':')[1]);
  
    // Use location.href to navigate to another page
    window.location.href = './easy-game-over.html';
  }

window.onload = function () {
  var boxesContainer = document.querySelector(".boxes-easy");

  if (boxesContainer) {
      randomizeBoxes(boxesContainer);
  }
};

function randomizeBoxes(container) {
  var boxes = container.querySelectorAll(".box-1-easy");
  var boxesArray = Array.from(boxes);

  // Fisher-Yates shuffle
  for (var i = boxesArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [boxesArray[i], boxesArray[j]] = [boxesArray[j], boxesArray[i]];
  }

  // Clear the container
  container.innerHTML = "";

  // Append shuffled elements back to the container
  boxesArray.forEach(function (box) {
      container.appendChild(box);
  });
}

  
  // Start the game
  function startGame() {
    gameStarted = true;
    timeRemaining = 60; // Reset the time when starting the game
    timerElement.textContent = `${timeRemaining}s`;
    scoreElement.textContent = `Score: 0`;

    mainAudio.volume=0.5;
    mainAudio.play();

    // Randomize the images before starting the game
    randomizeImages();

    // Reset all boxes to their initial state
    boxes.forEach((box) => {
      box.classList.remove('flipped', 'matched');
      box.querySelector('.front img').style.display = 'block';
    });

    // Empty the selected boxes array
    selectedBoxes = [];
  }

  // Flip a box
  function flipBox(box) {
    if (!gameStarted) return;

    flipAudio.play();

    box.classList.add('flipped');
    selectedBoxes.push(box);

    // If two boxes are selected, check if they match
    if (selectedBoxes.length === 2) {
      // Disable clicks on other boxes during comparison
      boxes.forEach((box) => box.classList.add('no-click'));

      setTimeout(() => {
        const [firstBox, secondBox] = selectedBoxes;

        if (firstBox.dataset.framework === secondBox.dataset.framework) {

          correctAudio.play();
          // The boxes match!
          firstBox.classList.add('matched');
          secondBox.classList.add('matched');

          // Increase the score
          scoreElement.textContent = `Score: ${parseInt(scoreElement.textContent.split(':')[1]) + 2}`;

          // Check if the game is over
          if (document.querySelectorAll('.matched').length === 16) {
            // Game completed!
            // alert('You win!');
            gameStarted = false;
            gameCompleted();
          }
        } else {
          // The boxes don't match
          firstBox.classList.remove('flipped');
          secondBox.classList.remove('flipped');
        }

        // Re-enable clicks on all boxes
        boxes.forEach((box) => box.classList.remove('no-click'));

        // Empty the selected boxes array
        selectedBoxes = [];
      }, 1000);
    }
  }

  localStorage.setItem('score', scoreElement.textContent.split(':')[1]);

  // Timer
  function timerTick() {
    if (timeRemaining > 0) {
      timeRemaining--;
      timerElement.textContent = `${timeRemaining}s`;
    } else {
      // Time is up!
      // alert('Game over!');
      gameStarted = false;
      gameCompleted();
    }
  }

  // Start the game when the page loads
  window.addEventListener('load', startGame);

  // Listen for clicks on the boxes
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (!box.classList.contains('flipped') && !box.classList.contains('matched')) {
        flipBox(box);
      }
    });
  });

  // Start the timer
  let timerInterval = setInterval(timerTick, 1000);
});

