// Removing Duplicates

// For numbers you unwrap them into a set.

// Iterate through the array and as you go check with includes.
// if array includes it, ignore adding it to the new array else add it.

const nums = [1, 1, 2, 2, 3, 3, 3, 4];
const numSet = new Set(nums);

console.log(numSet); // Set { 1, 2, 3, 4}

const noDups = [];

for (let i = 0; i < nums.length; i++) {
  if (!noDups.includes(nums[i])) {
    noDups.push(nums[i]);
  }
}
console.log(noDups);
