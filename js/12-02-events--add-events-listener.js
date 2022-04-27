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

/* Write a JavaScript program that will print the current page, by calling the printer on the button. * /

/*
   <p>Click the button to print the page</p>
   <button onclick="print()">Print</button>
   <button id="print">Print</button>
*/

var printButton = document.getElementById('print');

// printButton.addEventListener('click', function stampaj() {
//   window.print();
// });

printButton.addEventListener('click', stampaj);
function stampaj() {
  window.print();
};