/*------------- PREVENT DEFAULT ---------------*/

<a id="a1" href="https://www.krojacevaskola.com/">Link</a>
var a1 = document.getElementById("a1");
a1.addEventListener("click", function(event){
  event.preventDefault();
});

var aTag = document.getElementById('aTag');
aTag.addEventListener('click', function () {
  console.log("Radi");
});
aTag.addEventListener('click', function (e) {
  e.preventDefault();
  console.log("Radi");
});
aTag.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Radi');
  setTimeout(function () {
    location.href = 'https://www.krojacevaskola.com/';
  }, 2000);
});

<form action="https://www.thecampster.com/">
  <input type="text" placeholder="username">
  <input type="password" placeholder="password">
  <input type="submit" value="Submit">
</form>
var sub = document.querySelector('input[type="submit"]');
sub.addEventListener('click', stop);
function stop(e){
  e.preventDefault();
};

var sub = document.querySelector('input[type="submit"]');
sub.addEventListener('click', stop);
function stop(e){
  e.preventDefault();
  setTimeout(function () {
    location.href = 'https://www.thecampster.com/';
  }, 2000);  
};