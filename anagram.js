function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let strOneArr = str1.toLowerCase().split("");
  let strTwoArr = str2.toLowerCase().split("");

  for (let i = 0; i <= strOneArr.length; i++) {
    for (let j = 0; j <= strTwoArr.length; j++) {
      if (strOneArr[i] === strTwoArr[j]) {
        strOneArr.splice(i, 1);
        strTwoArr.splice(j, 1);

        i = 0;
        j = -1;
      }
      if (strOneArr.length === 0 && strTwoArr.length === 0) {
        return true;
      }
    }
  }
}

console.log(anagram("finder", "Friend"));
console.log(anagram("hello", "bye"));
