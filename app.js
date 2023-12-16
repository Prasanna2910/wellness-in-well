// getting elements from HTML to use in JS
let soundBtn = document.getElementById('sound');
let soundPlay = document.getElementById('audioPlayer');

// adding a clicking ability to the variable soundBtn and instructing it to play and pause while clicked
soundBtn.addEventListener('click', function () {
  if (soundPlay.paused) {
    soundPlay.play();
  } else {
    soundPlay.pause();
  }
});

// while clicking the playbtn, we are instructing the page to go to the respective page
let clickingThePlayBtn = document.querySelector('.playbtn');
clickingThePlayBtn.addEventListener('click', function () {
  window.location.href = 'nickname.html';
});

// while clicking the About, we are instructing the page to go to the respective page
let clickingTheAboutBtn = document.querySelector('#About');
clickingTheAboutBtn.addEventListener('click', function () {
  window.location.href = 'about.html'; //taking to about.html page
});
