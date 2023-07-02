const ul = document.querySelector('.list-item');
const items = document.querySelectorAll('.item');
const button = document.querySelector('.btn');


button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = 'The best developer Khayot 💻';
    ul.appendChild(li)
});

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.remove();
    });
});