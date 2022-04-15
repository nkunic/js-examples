// Import stylesheets
import './style.css';

// Write Javascript code!

var player1 = 'Danilo';
var player2 = 'Ivan';
var round = 0;
var player1Score = 0;
var player2Score = 0;

function bacanjeKockice() {

  /* Round count */
  round++;

  /* Dice */
  // var k1 = Math.floor(Math.random() * 6);
  // var k2 = Math.floor(Math.random() * 6);
  var kockica1 = Math.ceil(Math.random() * 6);
  var kockica2 = Math.ceil(Math.random() * 6);

  /* Player score */
  player1Score += kockica1;
  player2Score += kockica2;

  /* Dice trowed */
  //console.log(kockica1, kockica2);
  console.log('*** ROUND ' + round + ' ***');
  console.log(player1 + ':' + kockica1 + ' --- ' + kockica2 + ':' + player2);

  /* Current score */
  console.log(player1 + "(" +player1Score + ")" + " : " + "(" +player2Score + ")" + player2 );

  /* Game ends after 10 rounds */
  if (round === 10) {
    winner();
  } else {
    setTimeout(bacanjeKockice, 5000);
  }
}

bacanjeKockice();
