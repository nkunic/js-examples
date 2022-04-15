/* Math objekat */
console.log(Math);

var num = 2.33;
console.log(num); // 2.33

var num = 2.33;
var names = ['Danilo', 'Ana', 'Marija'];
console.log(names[num]); // undefined

var num = 2.33;
var num1 = Math.floor(num);
var names = ['Danilo', 'Ana', 'Marija'];
console.log(names[num1]); // Marija

var num = 2.33;
var num1 = Math.ceil(num);
console.log(num1); // 3

console.log(Math.min(10, 20, 30, 40)); // 10
console.log(Math.max(10, 20, 30, 40)); // 40

var rand = Math.random();
console.log(rand); // decimalan broj 0-1

var rand = Math.random() * 10;
console.log(rand); // decimalan broj 0-10

var rand = Math.floor(Math.random() * 10);
console.log(rand); // okrugao broj 0-9
