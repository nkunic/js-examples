/* EVENTS */

<h1 onclick="alert('Naslov je kliknut');">Naslov</h1>;
<button id="clickMe" onclick="alert(12)">Click me</button>

window.onload = function () {
  alert('Stranica je ucitana');
};

var element = document.getElementById('print');
element.onclick = function(){
  alert('Stranica je ucitana');
}

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

/* THIS */
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
