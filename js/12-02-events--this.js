/*------------- THIS ---------------*/

function info() {
  console.log(this); // window
}
info();

var obj = {
  info: function () {
    console.log(this); // obj
  },
};
obj.info();

var allLi = document.querySelectorAll('li');
for (var i = 0; i < allLi.length; i++) {
  allLi[i].addEventListener('click', colorMe);
}
function colorMe() {
  //allLi[2].style.background = "tomato";
  //this.style.background = "tomato";
  if (this.style.background == 'tomato') {
    this.style.background = 'white';
  } else {
    this.style.background = 'tomato';
  }
}

var obj = {
  name: 'Danilo',
  info: function () {
    console.log(this.name); // obj.name tj. Danilo
  },
};
obj.info();
