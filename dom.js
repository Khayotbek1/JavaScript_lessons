// const listItem = document.getElementsByTagName('li')
// console.log(listItem);


// //id bo'yicha olish
// const clickBtn = document.getElementById('click-btn')
// console.log(clickBtn);


// // queryselectorAll array [nodeList] qaytaradi va uni forEach qilsa boladi lekin u to'la qonli array emas
// const litem = document.querySelectorAll('.list-item')
// listItem.forEach((item) => {
//     console.log(litem);
// })


// //id bo'yicha olish
// const title = document.querySelector('#title')
// console.log(title);


//TextContent and innerHtml
// const title = document.getElementById('title')
// const listItem = document.querySelectorAll('.list-item')
// const peopleList = document.querySelector('.people-list')
// const names = ['Khayot', 'Doston', 'Donyor']

// title.textContent += ' New text';

// listItem.forEach((item) => {
//     item.textContent += ' darslari'
//     console.log(item);
// })

// names.forEach((name) => {
//     peopleList.innerHTML += `<li>${name}</li>`
// })

///

const link = document.querySelector('a')
const text = document.querySelector('.error')

console.log(link.getAttribute('href'));
console.log(text.getAttribute('class'));

link.setAttribute('href', 'https://www.yandex.ru');
link.textContent = 'Yandex search';

text.setAttribute('class', 'success'); //class nomi o'zgardi
text.setAttribute('style', 'color: red') // yangi style attributi qo'shdi va unga qiymat berildi



