//3.1
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ul = document.createElement("ul");
for (let i = 0; i < countries.length; i++) {
  const li = document.createElement("li");
  li.textContent = countries[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);
console.log(ul);

//3.2
const elementToRemove = document.querySelector(".fn-remove-me");
elementToRemove.parentNode.removeChild(elementToRemove);
console.log(elementToRemove);

//3.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('div[data-function="printHere"]');
const ulCars = document.createElement("ul");
for (const car of cars) {
const li = document.createElement("li");
li.innerHTML = car;
ulCars.appendChild(li);
console.log(ulCars);
}
document.body.appendChild(ulCars);


