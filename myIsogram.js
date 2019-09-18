let str = "Rocky sdad";

function Isogram(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  let trimmedStr = str.replace(/ /g, "").toLowerCase();
  let isIsogram = true;
  for (let i = 0; i < trimmedStr.length; i++) {
    for (let j = i + 1; j < trimmedStr.length; j++) {
      if (trimmedStr[i] === trimmedStr[j]) {
        console.log(trimmedStr[i]);
        console.log(trimmedStr[j]);
        isIsogram = false;
      }
    }
  }
  return isIsogram;
}

console.log(Isogram("Dermatoglyphics"), true);
console.log(Isogram("isogram"), true);
console.log(Isogram("aba"), false, "same chars may not be adjacent");
console.log(Isogram("moOse"), false, "same chars may not be same case");
console.log(Isogram("isIsogram"), false);
console.log(Isogram(""), true, "an empty string is a valid isogram");
