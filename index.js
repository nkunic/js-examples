// Import stylesheets
import './style.css';

// Write Javascript code!

var names = [];

function askUser() {
  var name = prompt("Unesite ime");
  names[0] = name;
}

askUser();

console.log(names);