var gettingText1 = document.getElementById('player1box');
var gettingText2 = document.getElementById('player2box');
var addName = document.getElementById('addName');
let arr1 = [];
let arr2 = [];
// let emptyStr = ' ';
addName.addEventListener(
  'click',
  function (e) {
    let storingTheValue1 = gettingText1.value;
    let storingTheValue2 = gettingText2.value;
    arr1.push(gettingText1);
    arr2.push(gettingText2);

    // console.log('check', storingTheValue2, e);

    if (storingTheValue1.trim() !== '' && storingTheValue2.trim() !=='') {
      localStorage.setItem('player-1', storingTheValue1);
      localStorage.setItem('player-2', storingTheValue2);
      window.location.href = 'gam.html';
    } else {
      alert('Please fill both the nicknames');
    }
  }

  // window.location.href = 'gam.html';
);
