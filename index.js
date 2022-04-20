// Import stylesheets
import './style.css';

// Write Javascript code! //

var btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function(e) {
  console.log(e); // Objekat: Mouse PointerEvent
});

window.addEventListener('mousemove', function(e) {
  console.clear();
  console.log("x:" + e.x + "   y: " + e.y);
});