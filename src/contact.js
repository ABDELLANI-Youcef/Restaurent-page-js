const contact = document.createElement('div');

const paragraph = document.createElement('p');
paragraph.textContent = 'You can conatct us in:';
contact.appendChild(paragraph);


const contacts = [
  'Mail: youcefabdellani@gmail.com',
  'facebook: youcefabdellani',
  'official site: youcefrestaurant.dz',
];

const ulist = contacts.reduce((ulist, element) => {
  const item = document.createElement('li');
  item.textContent = element;
  ulist.appendChild(item);
  return ulist;
}, document.createElement('ul'));

contact.appendChild(ulist);
contact.setAttribute('id', 'contact');
contact.classList.add('tabcontent');
contact.style.display = 'none';

export default contact;