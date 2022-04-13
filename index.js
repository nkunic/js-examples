// Import stylesheets
import './style.css';

// Write Javascript code!

var person = prompt("Unesite svoje ime", "Petar Petrovic");
if (person == null || person == "") {
    txt = "Korisnik je otkazao prompt.";
} else {
    txt = "Zdravo, " + person + "! Kako ste danas?";
}
