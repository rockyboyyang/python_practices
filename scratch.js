// function helper(topLeftCorner, topRightCorner, botRightCorner, botLeftCorner, i, animal, arr, firstCol, lastCol) {
//     let antiAnimal = null;
//     if (animal === 'mongoose') {
//         antiAnimal = "snake"
//     } else if (animal === "snake") {
//         antiAnimal = 'mouse'
//     } else if (animal === 'mouse') {
//         antiAnimal = 'elephant'
//     }

//     if (topLeftCorner === i) {
//         if (arr[i + 5] === antiAnimal) return false
//         if (arr[i + 1] === antiAnimal) return false
//         if (arr[i + 6] === antiAnimal) return false
//     }
//     if (botLeftCorner === i) {
//         if (arr[i - 5] === antiAnimal) return false
//         if (arr[i + 1] === antiAnimal) return false
//         if (arr[i - 4] === antiAnimal) return false
//     }
//     if (topRightCorner === i) {
//         if (arr[i + 5] === antiAnimal) return false
//         if (arr[i - 1] === antiAnimal) return false
//         if (arr[i + 4] === antiAnimal) return false
//     }
//     if (botRightCorner === i) {
//         if (arr[i - 5] === antiAnimal) return false
//         if (arr[i - 1] === antiAnimal) return false
//         if (arr[i - 6] === antiAnimal) return false
//     }
//     if (firstCol.includes(i)) {
//         if (arr[i - 4] === antiAnimal) return false
//         if (arr[i - 5] === antiAnimal) return false
//         if (arr[i + 1] === antiAnimal) return false
//         if (arr[i + 6] === antiAnimal) return false
//     }
//     if (lastCol.includes(i)) {
//         if (arr[i + 4] === antiAnimal) return false
//         if (arr[i + 5] === antiAnimal) return false
//         if (arr[i - 5] === antiAnimal) return false
//         if (arr[i - 1] === antiAnimal) return false
//         if (arr[i - 6] === antiAnimal) return false
//     }
//     if (arr[i - 1] === antiAnimal) return false
//     if (arr[i - 4] === antiAnimal) return false
//     if (arr[i - 5] === antiAnimal) return false
//     if (arr[i - 6] === antiAnimal) return false
//     if (arr[i + 1] === antiAnimal) return false
//     if (arr[i + 4] === antiAnimal) return false
//     if (arr[i + 5] === antiAnimal) return false
//     if (arr[i + 6] === antiAnimal) return false
// }

// function isValid(zooGrid) {

//     //Code goes here
//     let obj = {}
//     let arr = []
//     let firstCol = [5, 10, 15]
//     let lastCol = [9, 14, 19]
//     let topLeftCorner = 0
//     let botLeftCorner = 25
//     let topRightCorner = 4
//     let botRightCorner = 29
//     for (let i = 0; i < zooGrid.length; i++) {
//         arr.push(...zooGrid[i])
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'mongoose') {
//             if(helper(topLeftCorner, topRightCorner, botRightCorner, botLeftCorner, i, 'mongoose', arr, firstCol, lastCol) === false) return false
//         }

//         if (arr[i] === 'snake') {
//             if(helper(topLeftCorner, topRightCorner, botRightCorner, botLeftCorner, i, 'snake', arr, firstCol, lastCol) === false) return false
//         }

//         if (arr[i] === 'mouse') {
//             if(helper(topLeftCorner, topRightCorner, botRightCorner, botLeftCorner, i, 'mouse', arr, firstCol, lastCol) === false) return false
//         }
//     }
//     return true
// }





// var zooGrid = [["", "", "", "", ""],

// ["", "", "elephant", "snake", ""],

// ["", "", "mongoose", "", ""],

// ["", "mouse", "", "elephant", ""],

// ["", "", "", "", ""]];





// console.log(isValid(zooGrid));


// const orderList = (list) => {
//     for()
// }

// list = [{
//     a: 'hello',
//     b: 12,
//     c: [1,2,3],
//     d: 'fire',
//     e: 4,
//     f: 'apples',
//     g: 0,
// }]

console.log(orderList(list))