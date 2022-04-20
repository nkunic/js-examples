/* EVENTS */

<h1 onclick="alert('Naslov je kliknut');">Naslov</h1>

window.onload = function(){
  alert('Stranica je ucitana');
}

var print = getElementById("print");
document.print.addEventListener('click',function stampaj(){
  window.print();
}); 

var naslov = document.getElementById('naslov');
naslov.addEventListener('click',pozoviAlert);
function pozoviAlert(){
	alert('Kliknuli ste na naslov');
}