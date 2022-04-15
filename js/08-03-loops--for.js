/* For */
for (var i = 0; i < 10; i++) {
  console.log('Radi' + i); // Radi0 - Radi9
}

for (var count = 0; count < 18; count++) {
  console.log(count); // 0-17
}

var a = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i < a.length; i++) {
  console.log(a[i]); // 1-8
}

var arr = ['js', 'php', 'c++'];
for (var i = 0; i < 3; i++) {
  console.log(arr[1]); // php, php, php
}

var names = ['Ana', 'Marija', 'Ivana', 'Jovana'];
for (var i = 0; i < 10; i++) {
  console.log(names[0]); // Ana deset puta ispisano
}

var names = ['Ana', 'Marija', 'Ivana', 'Jovana'];
for (var i = 0; i < 4; i++) {
  console.log(names[i]); // Ana Marija Ivana Jovana
}

var names = ['Ana', 'Marija', 'Ivana', 'Jovana', 'Sofija'];
for (var i = 0; i < names.length; i++) {
  console.log(names[i]); // Ana Marija Ivana Jovana Sofija
}
