// Coercion
const total = 2 + 3 + "7";
console.log(total); // 57
console.log(typeof total); // string

console.log(typeof String(5)); // string
console.log(typeof Boolean(0)); // boolean
console.log(typeof Number("5")); // number
