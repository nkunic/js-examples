/* EVENTS */

<h1 onclick="alert('Naslov je kliknut');">Naslov</h1>
<button id="clickMe" onclick="alert(12)">Click me</button>

<button onclick="info()">Click me</button>
function info() {
  console.log("Javascript");
}

/*----------------------------------*/

window.onload = function () {
  alert('Stranica je ucitana');
};

<button>Click me</button>
var btn = document.getElementsByTagName('button')[0];
btn.onclick = function() {
  console.log("Radi");
}

<button>Click me</button>
var btn = document.getElementsByTagName('button')[0];
function info() {
  console.log("Javascript");
}
// btn.onclick = info(); xxx već pozove 
btn.onclick = info;

var element = document.getElementById('print');
element.onclick = function(){
  alert('Stranica je ucitana');
}

var btn = document.getElementsByTagName('button')[0];
function info() {
  console.log("Javascript");
}
btn.onclick = info;
function display() {
  console.log("Display");
}
btn.onclick = display; // Samo to