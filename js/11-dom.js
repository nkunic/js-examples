/* INTRODUCTION */
console.log(window);
console.log(window.document);
console.log(window.document.children);
console.log(window.document.children[0]);
console.log(window.document.children[0].children);
console.log(window.document.children[0].children[1].children);
console.log(window.document.children[0].children[1].children[0]);
console.log(window.document.children[0].children[1].children[0].children[0]);

window.document.children[0].children[1].children[0].children[0].style.color =
  'red';
var title = window.document.children[0].children[1].children[0].children[0];
console.log(title);
title.style.color = 'red';
title.style.fontSize = '100px';

/* SELECTORS */

/* Id */
var app = document.getElementById('app'); // element
console.log(app);

/* Tag */
var title = document.getElementsByTagName('h1'); // array
console.log(title);

/* Class */
var button = document.getElementsByClassName('button'); // array
console.log(button);

/* Input name */
var car = document.getElementsByName('car'); // array
console.log(car);

/* Tag list item */
var allLi = document.querySelectorAll('li'); // array
console.log(allLi);

var oneLi = document.querySelectorAll('li'); // Ist element
console.log(oneLi);

var li = document.querySelectorAll('ul > li');
console.log(li);

/* ATRIBUTES */

/* Change style */
document.getElementById('p2').style.color = 'blue';

var allList = document.getElementsByTagName('li');
console.log(allList);
allList[0].style.background = 'tomato';

/* Approaches the style property */
var x = document.getElementById('myH1').style;
console.log(x);

/* List of atributes */
var x = document.getElementsByTagName('h1')[0];
console.log(x.attributes);

/* setAttribute() */
document.getElementsByTagName('input')[0].setAttribute('type', 'button');
document
  .getElementById('aTag')
  .setAttribute('href', 'http://www.krojacevaskola.rs');

allList[0].id = 'one';
allList[0].className = 'two';
allList[0].className = 'active';

for(var i = 0; i < 5; i++) {
  allList[i].className = 'active';
}
for(var i = 0; i < 5; i++) {
  if(i != 3) {
    allList[i].className = 'active';
  }
}

/* getAttribute() */
var x = document.getElementsByTagName('h1')[0].getAttribute('class');
var allList = document.getElementsByTagName('li');
var x = document.getElementById('aTag').getAttribute('target');
var x = document.getElementById('myBtn').getAttribute('onclick');
console.log(x);

/* removeAttribute() */
var x = document.getElementsByTagName('H1')[0].removeAttribute('class');
