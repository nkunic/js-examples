// Import stylesheets
import './style.css';

// Write Javascript code! //

var xo = document.querySelector('.xo');

function createTable() {
  var text = '';
  for (var i = 0; i < 9; i++) {
    text += '<div class="xo__item"></div>';
  }
  xo.innerHTML = text;
}

createTable();