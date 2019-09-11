// Async and Await

// function doSomething() {
//   console.log(1);
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(json => console.log(json));

//   console.log(2);
// }

// 1
// 2
// user data

async function doSomething() {
  console.log(1);
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }
  console.log(2);
}
doSomething();
// await = waits for the fetch to continue
// 1
// user data
// 2
