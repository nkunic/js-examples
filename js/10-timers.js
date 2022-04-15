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

/* setInterval() metoda */

var myVar = setInterval(myTimer, 1000);
function myTimer() {
    alert('Zdravo, Svete!');
}

