// instanceof - Find out which class the object belongs to.
console.log("Hello world" instanceof String); // false

class Circle {}
const circle = new Circle();

console.log(circle instanceof Circle); // true
console.log(circle instanceof Object); // true
