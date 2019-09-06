const [month, day, year] = [6, 18, 1993];
console.log(month); // 6

const user = ({ firstName: fn, lastName: ln } = {
  firstName: "Ed",
  middleName: "James",
  lastName: "Woulfe"
});

console.log(fn); // Ed
console.log(ln); // Woulfe
console.log(user.firstName); // Ed
