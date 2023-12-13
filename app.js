// declaring a variable to get the id from html element and adding clicking ability to it
// after clicking the button, we are making it to go to the next page
let clickingThePlayBtn = document.querySelector('.playbtn');
clickingThePlayBtn.addEventListener('click', function () {
  window.location.href = 'gam.html';
});
let clickingTheAboutBtn = document.querySelector('#About');
clickingTheAboutBtn.addEventListener("click",function(){
  window.location.href = "about.html"
})
