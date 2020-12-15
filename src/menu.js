const menu = document.createElement('div');
const paragraph = document.createElement('p');
paragraph.textContent = 'In our restaurant we offer:';
menu.appendChild(paragraph);

// list of meals
const meals = [
  'Traditional Naili meals;',
  'Amazing Traditional Algerian meals;',
  'Fast food;',
  'Different juices;',
  'Different soups.',
];


const ulist = meals.reduce((ulist, element) => {
  const item = document.createElement('li');
  item.textContent = element;
  ulist.appendChild(item);
  return ulist;
}, document.createElement('ul'));


menu.appendChild(ulist);
menu.classList.add('tabcontent');

menu.setAttribute('id', 'menu');
export default menu;