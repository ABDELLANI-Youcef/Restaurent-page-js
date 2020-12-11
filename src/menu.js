let menu = document.createElement("div");
let paragraph = document.createElement("p");
paragraph.textContent = "In our restaurant we offer:";
menu.appendChild(paragraph);

// list of meals
let meals = [
  "Traditional Naili meals;",
  "Traditional Algerian meals;",
  "Fast food;",
  "Differents juices;",
  "Differents soups."
];

let ulist = document.createElement("ul");
for (let i = 0; i < meals.length; i++) {
  let item = document.createElement("li");
  item.textContent = meals[i];
  ulist.appendChild(item)
}
menu.appendChild(ulist);
menu.classList.add("tabcontent");

menu.setAttribute('id','menu');
export {menu}