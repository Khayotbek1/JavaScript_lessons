//TaskS
// const myArray = [[false, true], [1, 2], 99, 'hello']

// for (let i = 0; i < myArray.length; i++) {
//     if (typeof myArray[i] == 'string') {
//         console.log('Number index:', i);
//     }
// }

// myArray.forEach((item, i) => {
//     if (typeof item == 'string') {
//         console.log('String index:', i);
//     }
// })
///

// const data = [[1, 2, 3], 'red', [4, 5, 6], true, false]
// const newData = []

// data.forEach((item) => {
//     const res = Array.isArray(item)
//     if (res) {
//         item.forEach((num) => {
//             newData.push(num)
//         })
//     }
// })

// console.log(newData);
///

// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0'];
// const falsey = []
// checkData.forEach((item) => {
//     if (!item) {
//         falsey.push(item)
//     }
// })

// console.log(falsey);
///

// word to reverse for loop variant
// const word = 'samarqand';
// const splitWord = word.split('').reverse();
// let newWord = ''
// for (let i = 0; i < splitWord.length; i++) {
//     newWord += splitWord[i];
// }

// console.log(newWord);

//word to reverse forEach variant
// const word = 'samarqand'
// const splitWord = word.split('').reverse();
// let newWord = ''

// splitWord.forEach((item) => {
//     newWord += item
// })
// console.log(newWord);
///

// const word = 'AsSSalamu AlaYkum YaXsHimiSiz'
// let splitWord = word.split(' ')
// let newWord = ''

// splitWord.forEach((item) => {
//     const head = item.charAt().toUpperCase()
//     const half = item.slice(1).toLowerCase()
//     newWord += ' ' + head + half
// })

// console.log(newWord.trimStart());
///

const numbers = [-1, 82, 4, 3.1, -5.5, Infinity, 0, 2, 0.9]
let naturalNumber = 0

numbers.forEach((num) => {
    if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
        naturalNumber += num
    }
})

console.log(naturalNumber);

