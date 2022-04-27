/*------------- EVENT OBJECT ---------------*/

<button>Start</button>;
var btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function (e) {
  console.log(e); // Objekat: Mouse PointerEvent
});
window.addEventListener('mousemove', function (e) {
  console.clear();
  console.log('x:' + e.x + '   y:' + e.y); // x:108 y:183
});

<div class="box"></div>;
var box = document.querySelector('.box');
box.addEventListener('click', function (e) {
  if (e.altKey === true) {
    this.style.background = 'tomato';
  } else {
    this.style.background = 'cadetblue';
  }
});
