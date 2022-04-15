// Import stylesheets
import './style.css';

// Write Javascript code!

var player1 = 'Danilo';
var player2 = 'Ivan';
var round = 0;
function bacanjeKockice() {
  round++;
  // var k1 = Math.floor(Math.random() * 6);
  // var k2 = Math.floor(Math.random() * 6);
  var kockica1 = Math.ceil(Math.random() * 6);
  var kockica2 = Math.ceil(Math.random() * 6);

  //console.log(kockica1, kockica2);

  console.log('*** ROUND ' + round + ' ***');

  console.log(player1 + ":" + kockica1 + " --- " + kockica2 + ":" + player2);

  setTimeout(bacanjeKockice,5000);
  
}

bacanjeKockice();
