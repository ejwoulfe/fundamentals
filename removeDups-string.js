let str = "aAbbca";

function removeDups(str) {
  let loweCase = new Set(str.toLowerCase());
  let noDups = [...loweCase].join("");

  return noDups;
}
console.log(removeDups(str));
