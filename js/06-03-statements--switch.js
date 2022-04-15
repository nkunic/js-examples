/***** SWITCH *****/
var num1 = parseInt(prompt('Unesite broj 1')); // 6
var num2 = parseInt(prompt('Unesite broj 2')); // 3
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
    add(); // 9
    break;
  case '-':
    sub(); // 3
    break;
  case '/':
    div(); // 2
    break;
  case '*':
    mult(); // 18
    break;
  default:
    console.log('Pogrešan unos!');
}
