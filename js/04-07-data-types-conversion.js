/***** DATA TYPES CONVERSION *****/
var num1 = prompt("Unesite prvi broj"); // "1"
var num2 = prompt("Unesite drugi broj"); // "2"
console.log(num1 + num2); // "12"

var num1 = prompt("Unesite prvi broj"); // "1"
var num2 = prompt("Unesite drugi broj"); // "2"
var num3 = parseInt(num1); // 1
var num4 = parseInt(num2); // 2
console.log(num3 + num4); // 3

var num1 = parseInt(prompt('Unesite prvi broj')); // 1
var num2 = parseInt(prompt('Unesite drugi broj')); // 2
console.log(num1 + num2); // 3

console.log("10" - 5); // 5
console.log("Danilo" / 5); // NaN not an number / null

var names = ['Ana', 'Marija', 'Jovana'];
console.log(names); // ["Ana", "Marija", "Jovana"]
console.log(names.toString()); // Ana,Marija,Jovana