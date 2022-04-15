/* Window objekat */
console.log(window);

function info() {
  console.log(true);
}
window.info(); // Validno pozivanje funkcije info()


var a = 10;
console.log(a); // 10
console.log(window.a); // 10

var animal = 'Dog';
console.log(window);
console.log(window.animal); // Dog
console.log(animal); // Dog

var animal = 'Dog';
function animalCount() {
  console.log(animal);
}
animalCount(); // Dog

