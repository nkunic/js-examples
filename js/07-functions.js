/***** FUNCTION *****/
function display() {
  var name = 'Js';
  console.log(name);
}
display();

function display() {
  console.log(name2);
}
display(); // name2 is not defined

function display(a) {
  console.log(a);
}
display(); // undefined

function display(a) {
  console.log(a);
}
display('Javascript');
display('Php');

function info() {
  console.log('Zdravo, Svete');
}
info();

function zbir(broj1, broj2) {
  console.log(broj1 + broj2);
}
zbir(31, 90);

function naKvadrat(broj1) {
  var rezultat = broj1 * broj1;
  return rezultat;
}
console.log(naKvadrat(25)); // 625
var brojNaKvadrat = naKvadrat(25);
console.log(brojNaKvadrat); // 625

function pozdrav(ime) {
  var ceoPozdrav = 'Zdravo' + ' ' + ime + '!';
  return ceoPozdrav;
}
console.log(pozdrav('Juliska'));
var pozdravImenom = pozdrav('Juliska');
console.log(pozdravImenom);

function x(a, b) {
  console.log(a + b);
}
x('3', 1212);

var x = 10;
function pokusaj() {
  x = 20;
}
pokusaj();
console.log(x); // 20

/* Function statement */
info1();
function info1() {
  console.log('Zdravo');
}
info1();

/* Function expression (nema ime, anonimna funkcija, njeno ime je ime varijable) */
info2(); // info2 is not a function
var info2 = function () {
  console.log('Zdravo opet');
};
info2();


/* Metode */
var car = {
  name: "Volvo",
  speed: 260,
  info: function(){
    console.log(car.name + " " + car.speed);
  }
}
car.info(); // Volvo 260