// Import stylesheets
import './style.css';

// Write Javascript code!

var counter = 0;
var loop = setInterval(function() {
  counter++;
  console.log("Prošlo je: " + counter + "s");
},1000)

setTimeout(function() {
  clearInterval(loop);
},6000)



