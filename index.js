// Import stylesheets
import './style.css';

// Write Javascript code!

/***** ALERT *****/
//alert("Hello Javascript");  // String
//alert("Hello again");
//alert(broj); // Variable

/***** PROMPT *****/
//prompt("Unesite vaše ime");
//var ime = prompt("Unesite vaše ime");
//console.log(ime);

/***** VARIABLES *****/
//var broj = 12; // number
//console.log(broj);
//var text = 'Učim Javascript'; // string
//console.log(text);

/***** DATA TYPES *****/
// typeof 'Jovan'; // vraća "string"
// typeof 3.14; // vraća "number"
// typeof NaN; // vraća "number"
// typeof false; // vraća "boolean"
// typeof [1, 2, 3, 4]; // vraća "object" ???
// typeof { name: 'Jovan', age: 34 }; // vraća "object"
// typeof new Date(); // vraća "object"
// typeof function () {}; // vraća "function"
// typeof myCar; // vraća "undefined"
// typeof null; // vraća "object"

/***** STRING *****/
//var name = 'Nataša';
//var job = 'developer';
//var nj = name + job;
//console.log(nj);

//var text2 = "Danas je \"divan\" dan";
//var text3 = 'Danas je \n novi \t dan';
//console.log(text2);
//console.log(text3);

/***** NUMBER *****/
//var num1 = 6;
//var num2 = 12.3;
//var str1 = "Nataša";
//var sum = num1 + num2;
//var sum = str1 + num1;
//console.log(sum);

/***** BOOLEAN *****/
// var laz = false;
// var istina = true;
// console.log(1 == 1);
// console.log('Danilo' == 'Danilo');
// console.log('danilo' == 'Danilo');
// console.log(true == true);
// console.log(true == 1);
// console.log(false == 0);
// console.log(true === 1);
// var array1 = [1,2,3];
// var array2 = [1,2,3];
// console.log(array1 === array2);

/***** IF STATEMENT *****/
// if (true) {
//   console.log('Pogodak!');
// } else {
//   console.log('Greška!');
// }
// var password = 123;
// if (password === 123) {
//   console.log('Pogodak!');
// } else {
//   console.log('Greška!');
// }
var password = prompt("Pogodite broj");
if (password === 123) {
  console.log('Pogodak!');
} else {
  console.log('Greška!');
}





/***** UNDEFINED & NULL *****/
//var car;
//var car = null;
//console.log(car);
//var car = 'Volvo';
//console.log(car);/
//console.log(undefined === null); // false

/*****  ARRAY *****/
//var cars = ['Škoda', 'Volvo', 'Audi'];
//console.log(cars);
//var car = cars[0];
//console.log(car);
//console.log(cars[1]);

//var cars = ['Škoda', 'Volvo', 'Audi', 2, null, undefined, [1, 2, 3]];
//console.log(cars[4]);
//console.log(cars[5]);
//console.log(cars[6]);
//console.log(cars[6][1]);

/*****  OBJECT *****/
//var grad = {
//  ime: 'Beograd',
//  brojStanovnika: 2000000,
//  reke: ['Dunav', 'Sava'],
//};
//console.log(grad.ime);
//console.log(grad.ime + "ima" + grad.brojStanovnika + "stanovnika");
//console.log(grad.reke[0]);
//grad.staroIme = 'Singidunum';
//console.log(grad);
//console.log(grad["ime"]);

//var knjiga = {
//	ime : "JavaScript",
//	pisac : {
//		ime : "Danilo",
//		prezime : "Vesović"
//	}
//}
//console.log(knjiga.pisac.ime);

/***** DATA TYPES CONVERSION *****/
//var num1 = prompt("Unesite prvi broj");
//var num2 = prompt("Unesite drugi broj");
//console.log(num1 + num2);

//var num1 = prompt("Unesite prvi broj");
//var num2 = prompt("Unesite drugi broj");
//var num3 = parseInt(num1);
//var num4 = parseInt(num2);
//console.log(num3 + num4);

//var num1 = parseInt(prompt('Unesite prvi broj'));
//var num2 = parseInt(prompt('Unesite drugi broj'));
//console.log(num1 + num2);

//console.log("10" - 5);
//console.log("Danilo" / 5); // NaN not an number

// var names = ['Ana', 'Marija', 'Jovana'];
// console.log(names);
// console.log(names.toString());

/***** FUNCTION *****/
//function display() {
//  var name = 'Js';
//  console.log(name);
//}
//display();

//function display() {
//console.log(name2);
//}
//display(); // name2 is not defined

//function display(a){
//  console.log(a);
//}
//display(); // undefined

//function display(a) {
//  console.log(a);
//}
//display('Javascript');
//display('Php');

//function info(){
//	console.log('Zdravo, Svete');
//}
//info();

//function zbir (broj1,broj2){
//	console.log(broj1+broj2);
//}
//zbir(31,90)

//function naKvadrat(broj1) {
//  var rezultat = broj1 * broj1;
//  return rezultat;
//}
//console.log(naKvadrat(25)); // 625
//var brojNaKvadrat = naKvadrat(25);
//console.log(brojNaKvadrat); // 625

//function pozdrav(ime) {
//  var ceoPozdrav = 'Zdravo' + ' ' + ime + '!';
//  return ceoPozdrav;
//}
//console.log(pozdrav('Juliska'));
//var pozdravImenom = pozdrav('Juliska');
//console.log(pozdravImenom);
