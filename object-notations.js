// Object Notation
const user = {
  firstName: "Ed",
  lastName: "Woulfe",
  nickName: "Gaming God"
};

// Dot Notation
console.log(user.firstName + " " + user.lastName); // Ed Woulfe
console.log(user["firstName"]); // Ed

// Bracket Notation
for (let prop in user) {
  console.log(user[prop]); // Ed, Woulfe, Gaming God

  console.log(prop); // firstName, lastName, nickName
}
