const audio = new Audio('path/to/your/audiofile.mp3');

const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function () {
  audio.play();
});
let clickingThePlayBtn = document.querySelector('.playbtn');
clickingThePlayBtn.addEventListener('click', function () {
  window.location.href = 'nickname.html';
});
let clickingTheAboutBtn = document.querySelector('#About');
clickingTheAboutBtn.addEventListener('click', function () {
  window.location.href = 'about.html';
});
