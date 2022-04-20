// Import stylesheets
import './style.css';

// Write Javascript code! //

var allLi = document.querySelectorAll('li');

for (var i = i; i < allLi.length; i++) {
  allLi[i].addEventListener('click', colorMe);
}

function colorMe() {
	this.style.background = "tomato";
}
