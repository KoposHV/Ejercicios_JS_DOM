//2.1
const myDiv = document.createElement("div");
myDiv.innerText="myDiv2";
console.log(myDiv);
document.body.appendChild(myDiv);

//2.2
const myDivNew = document.createElement("div");
const p = document.createElement("p");
myDivNew.appendChild(p);
console.log(myDivNew)
document.body.appendChild(myDivNew);
//2.3

const div = document.createElement('div');
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo ${i}`;
  div.appendChild(p);
}
document.body.appendChild(div);
console.log(div);

//2.4
const myP = document.createElement("myP");
p.innerHTML = "Soy dinamico";
console.log(p);

//2.5
const h2 = document.querySelector("h2.fn-insert-here"); 
h2.innerHTML = "Wubba Lubba dub dub";
console.log(h2);

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li');
  li.textContent = apps[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);
console.log(ul);

//2.7
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
for (let i = 0; i < elementsToRemove.length; i++) {
  const element = elementsToRemove[i];
  element.parentNode.removeChild(element);
}
console.log(elementsToRemove);

//2.8
const divs = document.querySelectorAll('div');
const firstDiv = divs[0];
const secondDiv = divs[1];
const p1 = document.createElement('p1');
p1.textContent = 'Voy en medio!';
firstDiv.parentNode.insertBefore(p1, secondDiv);
console.log(p1);

//2.9
const divsWithClass = document.querySelectorAll('div.fn-insert-here');
for (let i = 0; i < divsWithClass.length; i++) {
  const div = divsWithClass[i];
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
}
console.log(divsWithClass);







