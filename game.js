// getting the html classess to the js and storing it in a variable
let getTheWellImage = document.querySelector('.wellimage');
let getScoreDiv = document.querySelector('.scorediv');
let scoreA = document.querySelector('#score1');
let scoreB = document.querySelector('#score');
let getTheBoyImage = document.querySelector('.boyimg');
let getTheGirlImage = document.querySelector('.girlimg');
let score1 = 0;
let score2 = 0;
let noOfPlays = 10;
let scoreNumberSpan1 = document.getElementById('score-number1');
let scoreNumberSpan2 = document.getElementById('score-number2');
// adding an animationn effect to bring the number on screen
let numCont = document.querySelector('.numbercontainer');
// function gettingNumberOnScreen(number) {
//   numCont.innerText = number;
//   numCont.style.display = 'block';
//   console.log('Here', scoreA);

//   setTimeout(() => {
//     numCont.style.display = 'none';
//   }, 200);
// }
function gettingNumberOnScreen(number) {
  numCont.style.display = 'block';
  numCont.innerText = number;
  numCont.classList.add("numbercontainer-Add");
  console.log('Here xyz', number);

  setTimeout(() => {
    numCont.classList.remove("numbercontainer-Add")
    numCont.style.display = 'none';
  }, 200);
}

// adding clicking ability to the well image
getTheBoyImage.addEventListener('click', function () {
  // console.log("ifi")
  if (noOfPlays >= 0) {
    console.log('Here ');
    const randomNumber = Math.floor(Math.random() * 10);
    gettingNumberOnScreen(randomNumber);
    score2 = score2 + randomNumber;
    scoreNumberSpan2.innerText = score2;
    score2.innerText = `ScoreB: ${score2}`;
    noOfPlays--;
  }
  if (noOfPlays === 0) {
    gettingNumberOnScreen.disabled = true;
    window.location.href = 'gameover.html';
  }
});

getTheGirlImage.addEventListener('click', function () {
  // console.log("ifi")
  if (noOfPlays > 0) {
    const randomNumber = Math.floor(Math.random() * 10);
    gettingNumberOnScreen(randomNumber);
    score1 = score1 + randomNumber;
    scoreNumberSpan1.innerText = score1;
    score1.innerText = `ScoreA: ${score1}`;
    noOfPlays--;
  }
  if (noOfPlays === 0) {
    gettingNumberOnScreen.disabled = true;
    window.location.href = 'gameover.html';
  }
});
