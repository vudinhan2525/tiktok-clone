let title = document.querySelector('title');
let timer = document.querySelector('.timer');
let pause = document.querySelector('.pause');
const USER_TIMER = 'USER_TIMER';
var countDownDate = 28800000;
var now = JSON.parse(localStorage.getItem(USER_TIMER)).now;
let res = 1000;

pause.onclick = function paus() {
  if (res === 1000) res = 0;
  else res = 1000;
};
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  title.innerText = hours + 'h ' + minutes + 'm ' + seconds + 's ';
  timer.innerText = hours + ':' + minutes + ':' + seconds;
  now += res;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
  localStorage.setItem(USER_TIMER, JSON.stringify({ now }));
}, 1000);
