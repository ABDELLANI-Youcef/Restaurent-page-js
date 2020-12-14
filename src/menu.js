const menu = document.createElement('div');
const paragraph = document.createElement('p');
paragraph.textContent = 'In our restaurant we offer:';
menu.appendChild(paragraph);

// list of meals
const meals = [
  'Traditional Naili meals;',
  'Traditional Algerian meals;',
  'Fast food;',
  'Different juices;',
  'Different soups.',
];

const ulist = document.createElement('ul');
for (let i = 0; i < meals.length; i += 1) {
  const item = document.createElement('li');
  item.textContent = meals[i];
  ulist.appendChild(item);
}
menu.appendChild(ulist);
menu.classList.add('tabcontent');

menu.setAttribute('id', 'menu');
export default menu;