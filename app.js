let clickingThePlayBtn = document.querySelector('.playbtn');
let backgroundAudio = document.getElementById('backgroundAudio');

clickingThePlayBtn.addEventListener('click', function () {
  // Pause the background audio when play button is clicked
  backgroundAudio.pause();
  window.location.href = 'nickname.html';
});
document.addEventListener('DOMContentLoaded', function () {
  const audio = new Audio('./bel.mp3');

  // Get the play button element
  // const playButton = document.getElementById('playButton');

  // Add a click event listener to the play button

  // Play the audio when the button is clicked
  audio.play();
});
