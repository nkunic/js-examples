// Import stylesheets
import './style.css';

// Write Javascript code! //

var print = document.getElementById('print');
console.log(print);
print.addEventListener('click',function stampaj(){
  window.print();
}); 

var naslov = document.getElementById('naslov');
naslov.addEventListener('click',pozoviAlert);
function pozoviAlert(){
	alert('Kliknuli ste na naslov');
}

