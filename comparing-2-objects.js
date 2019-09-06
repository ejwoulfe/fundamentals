// Compare 2 Objects
const user1 = {
  first: "Ed",
  last: "Woulfe"
};

const user2 = {
  last: "Woulfe",
  first: "Ed"
};

const stringObj1 = JSON.stringify(user1);
const stringObj2 = JSON.stringify(user2);

console.log(stringObj1 === stringObj2); // false, this will only work if the keys are in the same order!!

console.log(user1 === user2); // false, only work with pass by value and primitive

function isSameObject(obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1);
  const props2 = Object.getOwnPropertyNames(obj2);
  console.log(props1.length); // 2

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i++) {
    const property = props1[i];
    if (props1[property] !== props2[property]) {
      return false;
    }
  }
  return true;
}

console.log(isSameObject(user1, user2)); // true
