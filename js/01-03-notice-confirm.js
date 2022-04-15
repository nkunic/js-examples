/***** CONFIRM *****/

if (confirm('Pritisnite dugme!') == true) {
  console.log('Pritisli ste OK!'); // Pritisli ste OK!
} else {
  console.log('Pritisli ste Cancel!'); // Pritisli ste Cancel!
}

var userAnswer = confirm('Da li ste sigurni?'); // true
console.log(userAnswer); // false

var userAnswer = confirm('Da li je JS programski jezik?');
console.log(userAnswer); // true || false
