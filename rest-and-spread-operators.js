// Rest and Spread Operator

// Rest
function add(...num) {
  console.log(num); //[ 5, 6, 7, 8]
}

add(5, 6, 7, 8);

// Spread is used to unwrap arrays and objects

function add(...num) {
  const nums = [1, 2, 3, 4, ...num];
  console.log(nums); //[ 1, 2, 3, 4, 5, 6, 7, 8]
}

add(5, 6, 7, 8);

const user = {
  firstName: "Ed",
  lastName: "Woulfe"
};

console.log({ ...user }); // { firstName: 'Ed', lastName: 'Woulfe' }

const array1 = [1, 2, 3, 4];

console.log({ ...array1 }); // { 0: 1, 1: 2, 2: 3, 3: 4 }
