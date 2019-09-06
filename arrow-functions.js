// Arrow Functions

const example = param1 => param1 + 1;

console.log(example(5)); // 6

const user = {
  fistName: "Ed",
  lastName: "Woulfe",
  fullName: () => {
    return this.fistName + " " + this.lastName;
  }
};

console.log(user.fullName()); // undefined undefined

// Before arrow
[1, 2, 3, 4].map(function(num) {
  return num * 2;
});

// After arrow
const newArr = [1, 2, 3, 4].map(num => num * 2);

console.log(newArr); // [2, 4, 6, 8]
