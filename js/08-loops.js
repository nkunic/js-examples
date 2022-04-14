/***** LOOPS *****/
/* While */
var count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

var test = 0;
while (test < 10) {
  console.log('Radi' + test);
  test++;
}

/* Do while */
//???
var count = 0;
do {
  count++;
  console.log(count);
} while (count < 15);

/* For */
for (var i = 0; i < 10; i++) {
  console.log('Radi' + i);
}

for (var count = 0; count < 18; count++) {
  console.log(count);
}

var a = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

var names = ['Ana', 'Marija', 'Ivana', 'Jovana'];
for (var i = 0; i < 10; i++) {
  console.log(names[0]);
}

var names = ['Ana', 'Marija', 'Ivana', 'Jovana'];
for (var i = 0; i < 4; i++) {
  console.log(names[i]);
}

var names = ['Ana', 'Marija', 'Ivana', 'Jovana', 'Sofija'];
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

/* For in */
var obj = {
  name: 'Samsung',
  model: 'Note7',
};
for (var prop in obj) {
  console.log(obj[prop]); // "Samsung", "Note7"
}

var obj = {
  name: 'Danilo',
  job: 'developer',
};
for (var prop in obj) {
  console.log(obj.name);
}
for (var prop in obj) {
  console.log(obj[prop]);
}
