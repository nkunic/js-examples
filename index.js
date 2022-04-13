// Import stylesheets
import './style.css';

// Write Javascript code!















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
// var password = prompt("Pogodite broj");
// if (password === "123") {
//   console.log('Pogodak!');
// } else {
//   console.log('Greška!');
// }



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

// function x(a,b){
//   console.log(a+b)
// }
// x("3",1212);

/***** PRACTICE *****/
// var num1 = parseInt(prompt('Unesite broj 1'));
// var num2 = parseInt(prompt('Unesite broj 2'));
// var action = prompt('Unesite željenu radnju \n + - / *');

// function add() {
//   console.log(num1 + num2);
// }
// function sub() {
//   console.log(num1 - num2);
// }
// function div() {
//   console.log(num1 / num2);
// }
// function mult() {
//   console.log(num1 * num2);
// }

// if (action === "+") {
//   add();
// } else if (action === "-") {
//   sub();
// } else if (action === "/") {
//   div();
// } else if (action === "*") {
//   mult();
// } else {
//   console.log("Pogrešan unos!");
// }

// switch (action) {
//   case '+':
//     add();
//     break;
//   case '-':
//     sub();
//     break;
//   case '/':
//     div();
//     break;
//   case '*':
//     mult();
//     break;
//   default:
//     console.log('Pogrešan unos!');
// }
