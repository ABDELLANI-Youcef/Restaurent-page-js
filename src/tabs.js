const tabs = document.createElement('div');

const switchTab = (e, divId) => {
  const tabList = document.querySelectorAll('.tabContent');
  const active = document.querySelector('button.active');
  active.classList.toggle('active');
  e.target.classList.toggle('active');

  for (let i = 0; i < tabList.length; i += 1) {
    const element = tabList[i];
    if (element.getAttribute('id') === divId) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
};

const button1 = document.createElement('button');
button1.textContent = 'Menu';
button1.classList.add('active');
tabs.appendChild(button1);
button1.addEventListener('click', (e) => {
  switchTab(e, 'menu');
});


const button2 = document.createElement('button');
button2.textContent = 'Contacts';
button2.addEventListener('click', (e) => {
  switchTab(e, 'contact');
});
tabs.appendChild(button2);
tabs.classList.add('tab');

export default tabs;