// declaring a variable to the store some texts
const text =
  'This game consists of a boy and girl playing with a well. The well they are playing with is a magical well. It will generate random numbers from 0 to 9. Now these two friends decides to play a game. They both decide to have five chances each. Who gets the maximum score maximum score in the random five chances wins. As a user, help them gain their score by clicking the boy and the girl to increase your score. Rock on !!    ';

// Setting a index 0 to instruct the computer to start the previously mentioned texts to start from the 0th index
let index = 0;

function typeText() {
  // get the element from the HTML
  const typingText = document.getElementById('typing-text');
  typingText.textContent += text[index];
  index++;

  if (index < text.length) {
    // Adjusting the timeout to look like typing fast
    setTimeout(typeText, 35);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  typeText();
});

let takeOntoGame = document.getElementById('takeon');
takeOntoGame.addEventListener('click', function () {
  window.location.href = 'gam.html';
});
