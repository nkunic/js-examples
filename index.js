// Import stylesheets
import './style.css';

// Write Javascript code! //

var allList = document.getElementsByTagName('li');

var counter = 0;
var loop = setInterval(function () {
  for (var i = 0; i < 5; i++) {
    allList[i].style.background = 'none';
  }
  allList[counter].style.background = 'tomato';
  counter++;
  if (counter == 5) {
    counter = 0;
  }
}, 1000);
