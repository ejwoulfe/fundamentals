// Callback, functions that will be called at a later time to be used either synchronously or asynchronously.
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map(value => add5(value));

console.log(arr2);

function add5(val) {
  return val + 5;
}
