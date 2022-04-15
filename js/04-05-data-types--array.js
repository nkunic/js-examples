/*****  ARRAY *****/
var cars = ['Škoda', 'Volvo', 'Audi'];
console.log(cars); // ["Škoda", "Volvo", "Audi"]
var car = cars[0];
console.log(car); // Škoda
console.log(cars[1]); // Volvo

var cars = ['Škoda', 'Volvo', 'Audi', 2, null, undefined, [1, 2, 3]];
console.log(cars[4]); // null
console.log(cars[5]); // undefined
console.log(cars[6]); // [1, 2, 3]
console.log(cars[6][1]); // 2
