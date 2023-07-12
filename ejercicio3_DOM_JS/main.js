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

//3.4
const countriesData = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' }
];
for (let i = 0; i < countriesData.length; i++) {
  const country = countriesData[i];
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  
  h4.textContent = country.title;
  img.src = country.imgUrl;
  
  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
  console.log(country);
}

//3.5
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar último';
deleteLastBtn.addEventListener('click', () => {
  const divs = document.querySelectorAll('div');
  const lastDiv = divs[divs.length - 1];
  lastDiv.remove();
});
document.body.appendChild(deleteLastBtn);












