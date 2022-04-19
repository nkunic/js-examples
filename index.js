// Import stylesheets
import './style.css';

// Write Javascript code! //

var allList = document.getElementsByTagName('li');
console.log(allList);


for(var i = 0; i <5; i++) {
  allList[i].className = 'active';
}