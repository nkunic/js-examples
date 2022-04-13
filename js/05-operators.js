/***** OPERATORS *****/

var a = 10;
var b = 20;

if(a === 10) {
  console.log("Tačno!");
}
if(a > 10) {
  console.log("Tačno!");
}
if(a < 10) {
  console.log("Tačno!");
}

if (a === 10 && b === 20) {
  console.log('Tačno!');
}

if (a === 10 || b === 20) {
  console.log('Tačno!');
}

if (a !== 10) {
  console.log('Tačno!');
}

var username = prompt("Unesite username");
var password = prompt("Unesite password");
var secretCode = "9999";
var code = prompt("Unesite kod");

if(username === "Danilo" && password === "12345" || code === secretCode) {
  console.log("Tačno");
}

var a = 10;
a++;
a = a + 1;
console.log(a);

(a === 10) ? true : false;
(a === 10) ? console.log("Tačno") : console.log("Pogrešno");
(a === 11) ? console.log("Tačno") : console.log("Pogrešno");
