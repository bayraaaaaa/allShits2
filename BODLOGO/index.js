// let array = [1, 7, 2, 9, 5];
// let max = -Infinity;
// array.map((e) => {
//   for (let i = 0; i < array.length; i++) {
//     if (e < array[i]) {
//       var index = array.indexOf(e) - 1;
//       let sum = index * e;
//       if (max < sum) {
//         max = sum;
//       }
//     }
//   }
// });
// console.log(max);

// const sortedArr = [1, 1, 2, 4];
// const newArray = [];

// for (let i = 0; i < sortedArr.length; i++) {
//   if (sortedArr[i] !== sortedArr[i + 1] && sortedArr[i] !== sortedArr[i - 1]) {
//     newArray.push(sortedArr[i]);
//   }
// }
// console.log(newArray);

// const array = [-1, 0, 1, 2, -1, -4];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     for (let n = 0; n < array.length; n++) {
//       if (array[i] + array[j] + array[n] == 0) {
//         console.log(array[i], array[j], array[n]);
//       }
//     }
//   }
// }
var a = 1,
  b = 0,
  prev,
  num = 6;
while (num >= -1) {
  prev = a;
  a = a + b;
  b = prev;
  num--;
}
console.log(b);
