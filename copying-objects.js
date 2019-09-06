// Copy an object
const user1 = {
  firstName: "Ed",
  lastName: "Woulfe"
};
console.log(user1); // { firstName: 'Ed', lastName: 'Woulfe' }

let user2 = { ...user1 };
console.log(user2); // { firstName: 'Ed', lastName: 'Woulfe' }

let user3 = JSON.stringify(user1);
console.log(JSON.parse(user3)); // { firstName: 'Ed', lastName: 'Woulfe' }

const user4 = {
  ...user1
};
console.log(user4); // { firstName: 'Ed', lastName: 'Woulfe' }

let user5 = user1;

console.log(Object.is(user1, user2)); // false
console.log(Object.is(user1, user3)); // false
console.log(Object.is(user1, user4)); // false
console.log(Object.is(user1, user5)); // true
