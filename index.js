// Import stylesheets
import './style.css';

// Write Javascript code! //

var allList = document.getElementsByTagName('li');

var ul = document.getElementsByTagName('ul')[0];
ul.setAttribute('title', 'Ovo je naša lista');

console.log(ul.getAttribute('title'));