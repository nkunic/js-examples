// Import stylesheets
import './style.css';

// Write Javascript code!

var num1 = parseInt(prompt('Unesite broj 1'));
var num2 = parseInt(prompt('Unesite broj 2'));
var action = prompt('Unesite željenu radnju \n + - / *');
function add() {
  console.log(num1 + num2);
}
function sub() {
  console.log(num1 - num2);
}
function div() {
  console.log(num1 / num2);
}
function mult() {
  console.log(num1 * num2);
}
switch (action) {
  case '+':
    add();
    break;
  case '-':
    sub();
    break;
  case '/':
    div();
    break;
  case '*':
    mult();
    break;
  default:
    console.log('Pogrešan unos!');
}