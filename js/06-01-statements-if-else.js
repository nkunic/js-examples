/***** IF STATEMENT *****/
if (true) {
  console.log('Pogodak!'); // Pogodak
} else {
  console.log('Greška!');
}

var password = 123;
if (password === 123) {
  console.log('Pogodak!'); // Pogodak
} else {
  console.log('Greška!');
}

var password = prompt('Pogodite broj');
if (password === '123') {
  console.log('Pogodak!'); // Pogodak
} else {
  console.log('Greška!'); // Greška
}

var x;
if (x === undefined) {
  console.log('null'); // null
} else {
  console.log('undefined');
}

var a = 10;
var b = 20;
if (a !== b && b / a <= 2 ) {
  console.log(true); // true
}else {
  console.log(false);
}

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
if (action === '+') {
  add(); // 9
} else if (action === '-') {
  sub(); // 3
} else if (action === '/') {
  div(); // 2
} else if (action === '*') {
  mult(); // 18
} else {
  console.log('Pogrešan unos!');
}
