//Emptying an array.

let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = [1, 2, 3];
let array4 = [1, 2, 3];
let array5 = [1, 2, 3];

array1 = [];
array2.length = 0;
array3.splice(0);
while (array4.length > 0) {
  array4.pop();
}

while (array5.length > 0) {
  array5.shift();
}

console.log(array1); // []
console.log(array2); // []
console.log(array3); // []
console.log(array4); // []
console.log(array5); // []
