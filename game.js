// getting the html classess to the js and storing it in a variable
let getTheWellImage = document.querySelector('.wellimage');

// getting audio for the game page
let gameonMusic = document.getElementById('gameonMusic');

// getting audio for clicking
let clickAudio = document.getElementById('clickaudio');

// getting the html class for getting score
let getScoreDiv = document.querySelector('.scorediv');

// getting scores separately for two players
let scoreA = document.querySelector('#score1');
let scoreB = document.querySelector('#score');

// getting the images of boy and girl to give clicking ability for the players
let getTheBoyImage = document.querySelector('.boyimg');
let getTheGirlImage = document.querySelector('.girlimg');

// initially setting the score to be zero
let score1 = 0;
let score2 = 0;

// declaring the chances for both the players
let noOfPlaysForBoy = 5;
let noOfPlaysForGirl = 5;

// getting the span element from the HTML for score
let scoreNumberSpan1 = document.getElementById('score-number1');
let scoreNumberSpan2 = document.getElementById('score-number2');

// getting the span element from teh HTML for players' name
let localStorage1 = localStorage.getItem('player-1');
let localStorage2 = localStorage.getItem('player-2');
let span1 = document.getElementById('player1nickname');
let span2 = document.getElementById('player2nickname');
span1.innerHTML = localStorage1;
span2.innerHTML = localStorage2;

// declaring empty array to use it in the code
let arrayOne = [];
let arrayTwo = [];

// adding an animation effect to bring the number on screen in a number container which is got from HTML
let numCont = document.querySelector('.numbercontainer');

let gettingSpan1 = scoreNumberSpan1.value;
let gettingSpan2 = scoreNumberSpan2.value;

// while we load a page form previous page, background song playes
window.onload = function () {
  gameonMusic.play();
};

// declaring a function for the functionality to get a randomly generated number on screen
function gettingNumberOnScreen(number) {
  numCont.style.display = 'block';
  numCont.innerText = number;
  numCont.classList.add('numbercontainer-Add');
  console.log('Here xyz', number);

  setTimeout(() => {
    numCont.classList.remove('numbercontainer-Add');
    numCont.style.display = 'none';
  }, 200);
}

// adding clicking ability to the well image and showing the path for the "getTheBoyImage" what to do next
getTheBoyImage.addEventListener('click', function () {
  // console.log("ifi")
  clickAudio.play();
  if (noOfPlaysForBoy > 0) {
    console.log('Here ');
    const randomNumber = Math.floor(Math.random() * 10);
    gettingNumberOnScreen(randomNumber);
    score2 = score2 + randomNumber;
    scoreNumberSpan2.innerText = score2;
    score2.innerText = `ScoreB: ${score2}`;
    noOfPlaysForBoy--;
    localStorage.setItem('Player2', score2);
  }
  if (noOfPlaysForBoy === 0 && noOfPlaysForGirl === 0) {
    gettingNumberOnScreen.disabled = true;
    window.location.href = 'gameover.html';
  }
});

// adding clicking ability to the well image and showing the path for the "getTheGirlImage" what to do next
getTheGirlImage.addEventListener('click', function () {
  // console.log("ifi")
  clickAudio.play();
  if (noOfPlaysForGirl > 0) {
    const randomNumber = Math.floor(Math.random() * 10);
    gettingNumberOnScreen(randomNumber);
    score1 = score1 + randomNumber;
    scoreNumberSpan1.innerText = score1;
    score1.innerText = `ScoreA: ${score1}`;
    noOfPlaysForGirl--;
    localStorage.setItem('Player1', score1);
  }

  if (noOfPlaysForBoy === 0 && noOfPlaysForGirl === 0) {
    gettingNumberOnScreen.disabled = true;
    window.location.href = 'gameover.html';
  }
});


