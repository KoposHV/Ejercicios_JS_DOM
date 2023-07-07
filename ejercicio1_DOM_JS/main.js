//1.1
const myButton = document.querySelector(".showme");
console.log(myButton);
//1.2
const myH1 = document.querySelector("#pillado");
console.log(myH1);
//1.3
const myP = document.querySelectorAll("AllP");
console.log(myP);
//1.4
const myH4 = document.querySelectorAll(".pokemon");
console.log(myH4);
//1.5
const elementsWithAttribute = document.querySelectorAll('[data-function="testMe"]');
console.log(elementsWithAttribute);
//1.6
const thirdCharacter = document.querySelector('[data-function="testMe"]:nth-of-type(3)');
console.log(thirdCharacter);

