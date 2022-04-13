/***** VARIABLES *****/
var broj = 12; // number
console.log(broj);
var text = 'Učim Javascript'; // string
console.log(text);

/*** SCOPE  ***/
var ime = 'global';
function proveriScope() {
  var ime = 'local';
  console.log(ime);
}
proveriScope(); // "local"
console.log(ime); // "global"

var ime = 'global';
function proveriScope() {
  ime = 'local';
  console.log(ime);
}
proveriScope(); // "local"
console.log(ime); // "local"

var car = 'Volvo'; // global
console.log(car);
function info() {
  console.log(car);
}
info();

function info() {
  var cat = 'Školjkica'; // local
  console.log(cat);
}
info();

var cat = 'Žaklina'; // global
function info() {
  var cat = 'Školjkica'; // local
}
info();
console.log(cat);

var cat = 'Žaklina'; // global
function info() {
  var cat = 'Školjkica'; // local
  console.log(cat);
}
info();
console.log(cat);

var cat = 'Žaklina'; // global
function info() {
  cat = 'Školjkica'; // global
  console.log(cat);
}
info();
console.log(cat);

function info() {
  console.log(animal); // undefined
  var animal = 'Dog';
}
info();
