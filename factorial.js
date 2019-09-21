function factorial(num) {
  let total = 1;
  if (num === 0) {
    return 1;
  } else {
    for (let i = num; i >= 1; i--) {
      total *= i;
    }
  }
  return total;
}

console.log(factorial(10));
