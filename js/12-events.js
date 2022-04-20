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

/*------------- addEventListener ---------------*/

var print = document.getElementById('print');
console.log(print);
print.addEventListener('click', function stampaj() {
  window.print();
});

var naslov = document.getElementById('naslov');
naslov.addEventListener('click', pozoviAlert);
function pozoviAlert() {
  alert('Kliknuli ste na naslov');
}

// element.addEventListener( 'onclick' , info )
// element.addEventListener( 'click' , info() )
// element.addEventListener( 'onClick' , info )
element.addEventListener( 'click' , info )


<button>Click me</button>
btn.addEventListener('click', function(){
  console.log("Treći način");
});
btn.addEventListener('click', function(){
  console.log("Opet treći način");
});

function info() {
  console.log("Javascript");
}
function display() {
  console.log("Display");
}
btn.addEventListener('click', info); // Javascript
btn.addEventListener('click', display); // Display obadva

/*------------- THIS ---------------*/

function info(){
	console.log(this); // window  
}
info();

var obj = {
	info : function(){
		console.log(this); // obj
	}
}
obj.info();

/* PREVENT DEFAULT */
document.getElementById("a1").addEventListener("click", function(event){
  event.preventDefault()
});