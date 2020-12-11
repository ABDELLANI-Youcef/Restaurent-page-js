import { tabs } from "./tabs";
import { menu } from "./menu";
import { contact } from "./contact";
import restImage from "./restaurant.jpg";
import './style.css'

let content = document.querySelector('#content');
// Restaurant image
const myImage = new Image();
myImage.src = restImage;
content.appendChild(myImage);

// Header
let title = document.createElement("h1");
title.textContent = "Youcef's Restaurant";
content.appendChild(title);

// paragraph1
let paragraph1 = document.createElement("p");
paragraph1.textContent = " Hello every body. Welcome in our restaurant page. Here we make our possible to make satisfied about the meal and the good treatment.";
content.appendChild(paragraph1);

content.appendChild(tabs);
content.appendChild(menu);
content.appendChild(contact);

// paragraph3
let paragraph3 = document.createElement("p");
paragraph3.textContent = "You are welcome in our world any time. We make special offers for holiday and paties.";
content.appendChild(paragraph3);

