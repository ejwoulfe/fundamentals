// Naming and Standards

// Coming back to your old code or a new code base should be made easier.

// All caps for consts
const GLOBAL_NAME = "Phil";

// CamelCase
let earthRadius = 123;

// Descriptive Names for functions
user = {
  name: "Bill",
  id: "1234"
};
function updateUserName(user, newName) {
  return (this.user.name = newName);
}
console.log(user.name); // Bill
console.log(updateUserName(user, "Bob"));
console.log(user.name); // Bob
console.log(updateUserName(user, GLOBAL_NAME)); // Phil
console.log(user.name); // Phil
