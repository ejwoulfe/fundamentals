// Creating an Array

const array1 = [1, 2];
console.log(array1); //[ 1, 2 ]

const array2 = array1.map(value => {
  return value + 1;
});
console.log(array2);

const array3 = new Array();
array3.push(2);
console.log(array3); //[ 2 ]
