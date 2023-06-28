const listItem = document.getElementsByTagName('li')
console.log(listItem);


//id bo'yicha olish
const clickBtn = document.getElementById('click-btn')
console.log(clickBtn);


// queryselectorAll array [nodeList] qaytaradi va uni forEach qilsa boladi lekin u to'la qonli array emas
const litem = document.querySelectorAll('.list-item')
listItem.forEach((item) => {
    console.log(litem);
})


//id bo'yicha olish
const title = document.querySelector('#title')
console.log(title);