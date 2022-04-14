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
  name: 'Volvo',
  speed: 260,
  info: function () {
    console.log(car.name + ' ' + car.speed);
  },
};
car.info(); // Volvo 260

/* Argumenti */
function info(a, b) {
  console.log(a, b);
}
info(10, 20); // 10, 20

function info(a, b) {
  console.log(a, b);
}
info(10, 20, 30); // 10, 20 (30 će ignorisati)

function info() {
  console.log(arguments);
}
info(10, 20, 30); // {0: 10, 1: 20, 2: 30}

function info() {
  console.log(arguments[1]);
}
info(10, 20, 30); // 20

// Sabira zadate parametre */
function info() {
  var res = 0;
  for (var i = 0; i < arguments.length; i++) {
    res = res + arguments[i];
  }
  console.log(res);
}
info(10, 20, 30); // 60
info(12, 33, 44, 55, 999); // 1143
// Zaboravi šta je znala

function info() {
  var res = 0;
  for(var i = 0; i < arguments.length; i++){
    res = res + arguments[i];
  }
  return 100;
}
// info(10,20,30); // 60
// info(12,33,44,55,999); // 1143
var x = info();
console.log(x); // vrati 100 iz funkcije

function info() {
  var res = 0;
  for(var i = 0; i < arguments.length; i++){
    res = res + arguments[i];
  }
  return res;
}
var x = info(100,200,300);
console.log(x); // 600

function info() {
  var res = 0;
  for(var i = 0; i < arguments.length; i++){
    res = res + arguments[i];
  }
  return res;
}
var x = info(100,200,300);
console.log(x + info(22,33,44)); // 699