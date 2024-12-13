// console.log(document.body.children[0].children[0].children[0].children[1]);

var HeaderLInk1 =document.body.children[0].children[0].children[0].children[1];
var HeaderLInk2 =document.body.children[0].children[0].children[0].children[2];
console.log(HeaderLInk1);
console.log(HeaderLInk2);
console.log("-------------------------------");

Array.from(document.body.children[0].children[0].children[0].children).forEach(
  (element) => console.log(element)
);
