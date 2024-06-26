// Question input like: "Hello"
// Output is like: "olleh"

// By Object
// let str1 = "Hello";
// let temp1 = {};
// for (let i = str1.length - 1; i >= 0; i--) {
//   temp1[i] = str1[i];
// }
// let result = Object.values(temp);
// console.log(result);

// By Array
let str = "Hello";
let index = 0;
let temp = [];
for (let i = str.length - 1; i >= 0; i--) {
  temp[index] = str[i];
  index++;
}

str = temp.join('');

console.log(str);
