//addEventListener and target
//addEventListener bu hodisa ro'y berishi
//targer qay biri bosilganligini korsatadi

const button = document.querySelector('button');
const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');

// button.addEventListener('click', () => {
//     console.log('you are clicked me');
// })



// ul.remove()

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Something new text 📚📚'
    ul.appendChild(li)
})

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.remove()
    })
})
