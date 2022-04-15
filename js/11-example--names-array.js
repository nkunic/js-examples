var names = [];

function askUser() {
  var name = prompt('Unesite ime!');

  if (name !== 'kraj') {
    names[names.length] = name;
    askUser();
  } else {
    displayNames();
  }
}

askUser();

//console.log(names);

// for(var i=0; i < names.length; i++){
//   console.log(names[i]);
// }

function displayNames() {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
