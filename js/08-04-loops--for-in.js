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
  console.log(obj.name); // Danilo Danilo
}
for (var prop in obj) {
  console.log(obj[prop]); // Danilo developer
}