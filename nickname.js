// getting HTML ids to js by storing them in some variables
var gettingText1 = document.getElementById('player1box');
var gettingText2 = document.getElementById('player2box');
var addName = document.getElementById('addName');

// delaring two array to use it further in the js code
let arr1 = [];
let arr2 = [];

// adding an addEventListener to give clicking ability to the the button
addName.addEventListener('click', function (e) {
  let storingTheValue1 = gettingText1.value; //storing in the local storage 
  let storingTheValue2 = gettingText2.value;
  arr1.push(gettingText1); //pushing into the array
  arr2.push(gettingText2);

  if (storingTheValue1.trim() !== '' && storingTheValue2.trim() !== '') {
    localStorage.setItem('player-1', storingTheValue1);
    localStorage.setItem('player-2', storingTheValue2);
    window.location.href = 'gam.html'; //when both the nicknames are filled, it goes to the next page
  } else {
    alert('Please fill both the nicknames'); //if both the nicknames arae not filled, it shows anad alert
  }
});
