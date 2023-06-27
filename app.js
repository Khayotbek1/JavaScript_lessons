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
// /

// const numbers = [-1, 82, 4, 3.1, -5.5, Infinity, 0, 2, 0.9]
// let naturalNumber = 0

// numbers.forEach((num) => {
//     if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
//         naturalNumber += num
//     }
// })

// console.log(naturalNumber);
///
// Matndagi harflardan a A harfi necha marta ishtirok etganligini topish
// const words = 'QaAlesiz yaxshimisiz'
// let splitWords = words.split('')
// let counter = 0
// splitWords.forEach((word) => {
//     if (word == 'a' || word == 'A') {
//         counter++
//     }
// })
// console.log(`${counter} 'etgan'`);
///

// Arraydagi ma'lumot ni  qaysi data type kirishlikni ajratish

// const types = [21.1, 'Roziya', 'array', ['I am array'], null, true, false, 214];
// const newTypes = []

// types.forEach((type) => {
//     newTypes.push(typeof type)
// })
// console.log(newTypes);
///
// Stringdagi ma'lumot uzunligini aniqlash lendth foydalanmang
// const word = 'Uzbekistan';
// console.log(word.lastIndexOf(word.slice(-1)) + 1);
///


//Arrayning berilgan: [1,2,3,4,5] uning ichidagi elementlarga o'z index (position) raqamini qo'shib yangi array hosil qiling.
//Natija [1,3,5,7,9]
// const number = [1, 2, 3, 4, 5];
// let result = [];
// number.forEach((num, i) => {
//     result.push(num + i)
// })
// console.log(result);
///

//Sonlar yeg'indisini topish

// const counter = (n) => {
//     return n * (n + 1) / 2
// }
// let res = counter(20)
// console.log(res);
///

//Functionga berilgan raqamni 0 dan o'sha raqamlargacha bo'lgan sonlarni 3,5 va 15 bo'linish holatlarini tekshiring.
// 3 ga bo'linadigan sonalr 'fizz;
// 5 ga bo'linadigan sonlar 'buzz;
//15 ga bo'linadigan sonlar 'fizzbuzz; deb ataladi;

// const result = []
// const fizzBuzzFunc = function (number) {
//     for (let i = 1; i <= number; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             result.push('Fizzbuzz')
//         } else if (i % 3 == 0) {
//             result.push('Fizz')
//         } else if (i % 5 == 0) {
//             result.push('Buzz')
//         } else {
//             result.push(i)
//         }
//     }
// }
// fizzBuzzFunc(25)
// console.log(result);
///

// O'zingiz haqingizda object yarating va unga haqida methodini qo'shing. U method dan foydalanilsa objectdagi ma'lumotlardan foydalanib o'zingiz haqizda gapirib beradi.

const khayotObj = {
    name: 'Khayot',
    lastname: 'Razzakov',
    age: 25,
    region: 'Fergana',
    isMarried: true,
    job: 'Programmer',
    infoUser: function () {
        return `Assalomu aleykum mening ismim ${this.name} familiyam ${this.lastname} yoshim ${this.age} da men ${this.region} da yashayman  ${this.isMarried ? 'uylanganman' : 'uylanmaganman'} men ${this.job} bo'lib ishlayman`
    }
}
let result = khayotObj.infoUser()
console.log(result);

///

