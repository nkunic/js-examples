/***** VARIABLES *****/
var broj = 12; // number
console.log(broj);
var text = 'Učim Javascript'; // string
console.log(text);

/*** SCOPE  ***/
var ime = "global";
function proveriScope(){
	var ime = "local";
	console.log(ime);
}
proveriScope();              // "local"
console.log(ime);            // "global"

var ime = "global";
function proveriScope(){
	ime = "local";
	console.log(ime);
}
proveriScope()              // "local"
console.log(ime)            // "local"

