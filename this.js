// Access your current context.

console.log(this);

const exampleObj = {
  first: "Ed",
  last: "Woulfe",
  fullName() {
    return this.first + " " + this.last;
  }
};
console.log(exampleObj);
console.log(exampleObj.fullName()); // Ed Woulfe
