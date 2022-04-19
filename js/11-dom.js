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
