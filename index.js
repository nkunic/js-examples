// Import stylesheets
import './style.css';

// Write Javascript code! //

var allList = document.getElementsByTagName('li');

var counter = 0;
var loop = setInterval( function() {
  allList[counter].style.background = "tomato";
},1000);

