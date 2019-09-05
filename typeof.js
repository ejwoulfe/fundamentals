// typeof - checks the type of data
console.log(typeof 37 === "number"); // true
console.log(typeof NaN === "number"); // true

console.log(typeof true === "boolean"); // true

console.log(typeof undefined === "undefined"); // true

console.log(typeof { a: 1 } === "object"); // true

console.log(typeof [1, 2, 3] === "object"); // true
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({})); // false

console.log(typeof new Date() === "object"); // true
console.log(typeof /regex/ === "object"); // true
console.log(null instanceof Object); // false
console.log(typeof null);
console.log({} instanceof Object); // true

console.log(typeof function() {} === "function"); // true
console.log(typeof Math.sin === "function"); // true
