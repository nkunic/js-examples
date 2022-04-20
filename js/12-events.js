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

var btn = document.getElementsByTagName('button')[0];
btn.addEventListener("click", function(event){
  alert('Kliknuli ste na naslov');
});

var firstLi = document.querySelector('li');
var allLi = document.querySelectorAll('li');
function colorMe() {
	if(firstLi.style.background == "tomato") {
		firstLi.style.background = "white";
	} else {
		firstLi.style.background = "tomato";
	}
}
firstLi.addEventListener('click', colorMe);
/allLi.addEventListener('click', colorMe); // allLi.addEventListener is not a function

/*------------- THIS ---------------*/

function info(){
	console.log(this); // window  
}
info();

var obj = {
	info: function(){
		console.log(this); // obj
	}
}
obj.info();

var allLi = document.querySelectorAll('li');
for (var i = 0; i < allLi.length; i++) {
  allLi[i].addEventListener('click', colorMe);
}
function colorMe() {
  //allLi[2].style.background = "tomato";
  //this.style.background = "tomato";
  if (this.style.background == 'tomato') {
    this.style.background = 'white';
  } else {
    this.style.background = 'tomato';
  }
}

var obj = {
  name: 'Danilo',
  info: function () {
    console.log(this.name); // obj.name tj. Danilo
  },
};
obj.info();

/*------------- EVENT OBJECT ---------------*/

<button>Start</button>
var btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function (e) {
  console.log(e); // Objekat: Mouse PointerEvent
});
window.addEventListener('mousemove', function (e) {
  console.clear();
  console.log('x:' + e.x + '   y:' + e.y); // x:108 y:183
});

<div class="box"></div>
var box = document.querySelector('.box');
box.addEventListener('click', function (e) {
  if (e.altKey === true) {
    this.style.background = 'tomato';
  } else {
    this.style.background = 'cadetblue';
  }
});

/*------------- PREVENT DEFAULT ---------------*/

<a id="a1" href="https://www.krojacevaskola.com/">Link</a>
var a1 = document.getElementById("a1");
a1.addEventListener("click", function(event){
  event.preventDefault();
});

var aTag = document.getElementById('aTag');
aTag.addEventListener('click', function () {
  console.log("Radi");
});
aTag.addEventListener('click', function (e) {
  e.preventDefault();
  console.log("Radi");
});
aTag.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Radi');
  setTimeout(function () {
    location.href = 'https://www.krojacevaskola.com/';
  }, 2000);
});

<form action="https://www.thecampster.com/">
  <input type="text" placeholder="username">
  <input type="password" placeholder="password">
  <input type="submit" value="Submit">
</form>
var sub = document.querySelector('input[type="submit"]');
sub.addEventListener('click', stop);
function stop(e){
  e.preventDefault();
};

var sub = document.querySelector('input[type="submit"]');
sub.addEventListener('click', stop);
function stop(e){
  e.preventDefault();
  setTimeout(function () {
    location.href = 'https://www.thecampster.com/';
  }, 2000);  
};