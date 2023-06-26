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

const data = [[1, 2, 3], 'red', [4, 5, 6], true, false]
const newData = []

data.forEach((item) => {
    const res = Array.isArray(item)
    if (res) {
        item.forEach((num) => {
            newData.push(num)
        })
    }
})

console.log(newData);
///

const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0'];
const falsey = []
checkData.forEach((item) => {
    if (!item) {
        falsey.push(item)
    }
})

console.log(falsey);
///