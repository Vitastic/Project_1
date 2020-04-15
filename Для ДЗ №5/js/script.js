let title = document.getElementById('title'),
    prt = document.getElementById('prompt'),
    adv = document.getElementsByClassName('adv'),
    btn = document.getElementsByClassName('menu-item'),
    body = document.getElementsByTagName('body'),
    menu = document.getElementsByClassName('menu');


title.innerHTML = 'Мы продаем только подлинную технику Apple';

question = prompt ("Как Вы относитесь к технике apple?", '');
prt.innerHTML = question;
prt.classList.add('prompt');

btn[1].innerHTML = 'Второй пункт';
btn[2].innerHTML = 'Третий пункт';

let li = document.createElement('li');
li.textContent = 'Пятый пункт';
li.classList.add('menu-item');
menu[0].appendChild(li);

adv[0].remove();

body[0].style.background = "url('img/apple_true.jpg') center no-repeat";






