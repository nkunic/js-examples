/* setTimeout() metoda */

<button onclick="setTimeout(myFun, 3000)">Press me</button>
function myFun() {
  alert('Zdravo, Svete!');
}

<button onclick="myVar = setTimeout(myFunction, 3000)">Start</button>
<button onclick="clearTimeout(myVar)">Stop</button>
function myFunction() {
  alert('Zdravo, Svete!');
}

setTimeout(function() {
  console.log("Radi!");
},2000) // Odložili izvršenje funkcije za 2 sekunde





/* setInterval() metoda */

var myVar = setInterval(myTimer, 1000);
function myTimer() {
    alert('Zdravo, Svete!');
}

<p id="demo"></p>
<button onclick="clearInterval(myVar)">Stop time</button>
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

setInterval(function() {
  console.log("Radi!");
},1000) // Svake 2 sekunde da se ponavlja funkcija

var counter = 0;
setInterval(function() {
  counter++;
  console.log("Prošlo je: " + counter + "s"); // Odbrojava svake sekunde Prošlo je: n s
},1000)