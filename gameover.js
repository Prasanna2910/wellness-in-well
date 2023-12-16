// getting id used in HTML to use it in JS
let playagainBtn = document.querySelector('#playing');

// adding a clickablity to the playagainBtn and  after clikced we are instructing to go to the next page
playagainBtn.addEventListener('click', () => {
  window.location.href = 'gam.html';
  // console.log('ndis');
});

// stored variables in local storage are got as per requirement 
let localStoragePlayer1 = localStorage.getItem('Player1'); //declaring variables to the value got from the local storage
let localStoragePlayer2 = localStorage.getItem('Player2');
let spanTag1 = document.getElementById('finalscore1'); //declaring variables to get the span tag form HTML
let spanTag2 = document.getElementById('finalscore2');
spanTag1.innerHTML = localStoragePlayer1; //storing the HTML element with the value got from Local storage
spanTag2.innerHTML = localStoragePlayer2;

// declaring an array to store five wordings andd then taking and displaying it randomly in the gameover page.
let randomGenerator = document.getElementById("randomSpan")
arrayRandom = ["Lucky fellows","fantastic two","Rockers","Check your luck again, Once again dude!!"]
console.log(randomGenerator)
randomGenerator.innerText = arrayRandom[Math.floor(Math.random()*5)]