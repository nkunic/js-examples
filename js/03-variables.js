/***** VARIABLES *****/
var broj = 12; // number
console.log(broj); // 12
var text = 'Učim Javascript'; // string
console.log(text); // Učim Javascript

/*** SCOPE  ***/
var ime = 'global';
function proveriScope() {
  var ime = 'local';
  console.log(ime);  // "local"
}
proveriScope();
console.log(ime); // "global"

var ime = 'global';
function proveriScope() {
  ime = 'local';
  console.log(ime); // "local"
}
proveriScope(); 
console.log(ime); // "local"

var car = 'Volvo'; 
console.log(car); // Volvo - global
function info() {
  console.log(car);
}
info();

function info() {
  var cat = 'Školjkica';
  console.log(cat);  // Školjkica - local
}
info();

var cat = 'Žaklina';
function info() {
  var cat = 'Školjkica'; 
}
info();
console.log(cat); // Žaklina - global

var cat = 'Žaklina';
function info() {
  var cat = 'Školjkica'; 
  console.log(cat); // Školjkica - local
}
info();
console.log(cat);  // Žaklina - global

var cat = 'Žaklina';
function info() {
  cat = 'Školjkica';
  console.log(cat); // Školjkica - global
}
info();
console.log(cat); // Školjkica - global

function info() {
  console.log(animal); // undefined
  var animal = 'Dog';
}
info();
