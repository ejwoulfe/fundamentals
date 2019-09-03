// Const and let use block scope
{
  let foo = 10;
  console.log(foo); // 10
}
console.log(foo); // undefined

function le() {
  let f = true;
  if (f) {
    const x = 10;
  } else {
    var x = 5;
  }
  return x;
}
console.log(le()); //undefined

// var uses lexical scope
{
  var foo = 10;
  console.log(foo); // 10
}
console.log(foo); // 10

function le() {
  let f = true;
  var hh = "sd";
  if (f) {
    var x = 10;
  } else {
    var x = 5;
  }
  return x;
}
console.log(le()); //10
