var str = "aabcdddeeefggg";

function count(str) {
  let obj = {};
  let max = 0;
  let letter = "";

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] = obj[str[i]] + 1;
      if (obj[str[i]] >= max) {
        max = obj[str[i]];
        letter = str[i];
      }
    } else {
      obj[str[i]] = 1;
    }
  }
  return letter + " " + max;
}

console.log(count(str));
