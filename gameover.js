let playagainBtn = document.querySelector('#playing');
playagainBtn.addEventListener('click', () => {
  window.location.href = 'gam.html';
  console.log('ndis');
});
let localStoragePlayer1 = localStorage.getItem('Player1');
let localStoragePlayer2 = localStorage.getItem('Player2');
let spanTag1 = document.getElementById('finalscore1');
let spanTag2 = document.getElementById('finalscore2');
spanTag1.innerHTML = localStoragePlayer1;
spanTag2.innerHTML = localStoragePlayer2;
w