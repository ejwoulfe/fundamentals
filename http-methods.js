// HTTP Methods and Verbs
// 4 Main Calls, GET, POST, PUT/UPDATE, DELETE

// GET
async function getNotes() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();

  console.log("Get", json);
}
// getNotes();

// POST
async function postNotes() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Ed",
      body: "Woulfe",
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const json = await response.json();

  console.log("POST", json);
}
// postNotes();

// PUT/UPDATE
async function putNotes() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "Ed",
      body: "Woulfe",
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const json = await response.json();

  console.log("PUT", json);
}
putNotes();

// DELETE
async function deleteNotes() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const json = await response.json();

  console.log("Delete", json);
}
// getNotes();
