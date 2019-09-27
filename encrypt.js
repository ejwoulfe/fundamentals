const encrypt = {
  a: "a",
  f: "f",
  o: "l",
  t: "t",
  b: "m"
};

function encryptString(str) {
  let encryptedString = "";
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (encrypt.hasOwnProperty(letter)) {
      encryptedString += encrypt[letter];
    } else {
      encryptedString += letter;
    }
  }
  return encryptedString;
}

console.log(encryptString("football"));
