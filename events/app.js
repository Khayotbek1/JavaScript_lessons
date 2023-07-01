//addEventListener and target
//addEventListener bu hodisa ro'y berishi
//targer qay biri bosilganligini korsatadi

const button = document.querySelector('button');
const items = document.querySelectorAll('li');

button.addEventListener('click', () => {
    console.log('you are clicked me');
})

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.style.textDecoration = 'line-through';
        e.target.style.opacity = '0.8';
    })
})