// getting id used in HTML to use it in JS
let playagainBtn = document.querySelector('#playing');

// adding a clickablity to the playagainBtn and  after clikced we are instructing to go to the next page
playagainBtn.addEventListener('click', () => {
  window.location.href = 'gam.html';
  console.log('ndis');
});

// stored variables in local storage are got as per requirement 
let localStoragePlayer1 = localStorage.getItem('Player1');
let localStoragePlayer2 = localStorage.getItem('Player2');
let spanTag1 = document.getElementById('finalscore1');
let spanTag2 = document.getElementById('finalscore2');
spanTag1.innerHTML = localStoragePlayer1;
spanTag2.innerHTML = localStoragePlayer2;
