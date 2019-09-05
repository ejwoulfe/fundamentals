//Anonymous Functions are functions that are stored in a variable and doesn't have its own name.
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(5, 5)); // 10

const add2 = function(num1, num2) {
  return num1 + num2;
};
console.log(add2(5, 6)); // 11
