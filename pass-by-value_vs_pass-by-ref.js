//Pass by Value
let example1 = 3;
let example2 = example1;
example2++;

console.log(example1, " - ", example2); // 3 ' - ' 4

// Pass by Reference
const example3 = [1, 2];
const example4 = example3;
example4.push(2);

console.log(example3, " - ", example4); // [1, 2, 2] ' - ' [1, 2, 2]

//... spread operater, no longer storing refernce creating a new array/object.
const example5 = { lastName: "Woulfe" };
const example6 = { ...example5 };
example5.firstName = "Ed";

console.log(example5, " - ", example6); // { lastName: 'Woulfe', firstName: 'Ed' } ' - ' { lastName: 'Woulfe' }
