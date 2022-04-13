/***** IF STATEMENT *****/
if (true) {
  console.log('Pogodak!');
} else {
  console.log('Greška!');
}
var password = 123;
if (password === 123) {
  console.log('Pogodak!');
} else {
  console.log('Greška!');
}
var password = prompt("Pogodite broj");
if (password === "123") {
  console.log('Pogodak!');
} else {
  console.log('Greška!');
}



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

if (action === "+") {
  add();
} else if (action === "-") {
  sub();
} else if (action === "/") {
  div();
} else if (action === "*") {
  mult();
} else {
  console.log("Pogrešan unos!");
}