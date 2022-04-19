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
