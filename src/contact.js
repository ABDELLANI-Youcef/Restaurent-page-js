let contact = document.createElement("div");

let paragraph = document.createElement("p");
paragraph.textContent = "You can conatct us in:";
contact.appendChild(paragraph);


let contacts = [
  "Mail: youcefabdellani@gmail.com",
  "facebook: youcefabdellani",
  "official site: youcefrestaurant.dz"
];

let ulist = document.createElement("ul");
for (let i = 0; i < contacts.length; i++) {
  let item = document.createElement("li");
  item.textContent = contacts[i];
  ulist.appendChild(item)
}
contact.appendChild(ulist);
contact.setAttribute('id','contact');
contact.classList.add("tabcontent");
contact.style.display = 'none';

export {contact}