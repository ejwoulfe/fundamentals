// Creating new array in different ways
const prices = [1, 2, 3, 10, 20, 30];

// Map - Create new array, maybe we want to edit its values.
const mapExample = prices.map(value => value + 1);

console.log(mapExample); // [2, 3, 4, 11, 21, 31]

// Filter - Take an array of data and filter out data based on your conditions. ie: #s > 10
const filterExample = prices.filter(value => value < 10);

console.log(filterExample); // [1, 2 ,3 ]

// Reduce -  take an array and condense it’s content into a single value or a new array with certain conditions. almost like filter.
const reduceExample = prices.reduce((total, current) => {
  return (total += current);
}, 0);

console.log(reduceExample); // 66

const reduceArrayExample = prices.reduce((accumulator, value) => {
  const newValue = value + 1;
  if (newValue <= 20) {
    accumulator.push(newValue);
  }
  return accumulator;
}, []);
console.log(reduceArrayExample); //[2, 3, 4, 11]
