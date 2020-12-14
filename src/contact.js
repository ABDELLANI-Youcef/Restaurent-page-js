const contact = document.createElement('div');

const paragraph = document.createElement('p');
paragraph.textContent = 'You can conatct us in:';
contact.appendChild(paragraph);


const contacts = [
  'Mail: youcefabdellani@gmail.com',
  'facebook: youcefabdellani',
  'official site: youcefrestaurant.dz',
];

const ulist = document.createElement('ul');
for (let i = 0; i < contacts.length; i += 1) {
  const item = document.createElement('li');
  item.textContent = contacts[i];
  ulist.appendChild(item);
}
contact.appendChild(ulist);
contact.setAttribute('id', 'contact');
contact.classList.add('tabcontent');
contact.style.display = 'none';

export default contact;