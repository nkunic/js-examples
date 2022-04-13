/***** PROMPT *****/
prompt("Unesite vaše ime");
var ime = prompt("Unesite vaše ime");
console.log(ime);

var person = prompt('Unesite svoje ime', 'Petar Petrovic'); // presetovana vrednost
if (person == null || person == '') {
  txt = 'Korisnik je otkazao prompt.';
} else {
  txt = 'Zdravo, ' + person + '! Kako ste danas?';
}
