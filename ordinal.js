function ordinal(num) {
  // 1 = st, -2 = nd, -3 = rd, 11 = th,  12 = th, 13 = th
  let lastTwoDigits = num % 100;
  let lastDigit = num % 10;
  let ordinalString = "";

  if (lastTwoDigits === 13 || lastTwoDigits === 12 || lastTwoDigits === 11) {
    ordinalString = "th";
  } else if (lastDigit === 1) {
    ordinalString = "st";
  } else if (lastDigit === 2) {
    ordinalString = "nd";
  } else if (lastDigit === 3) {
    ordinalString = "rd";
  } else {
    ordinalString = "th";
  }
  return num + ordinalString;
}

console.log(ordinal(1));
console.log(ordinal(2));
console.log(ordinal(3));
console.log(ordinal(11));
console.log(ordinal(12));
console.log(ordinal(13));
console.log(ordinal(133));
console.log(ordinal(113));
