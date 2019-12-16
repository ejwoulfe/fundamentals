let pr = new Promise((resolve, reject) => {
  if (1 == 1) {
    resolve("done");
  } else {
    reject("error");
  }
});

pr.then(function(message) {
  console.log(message);
})
  .catch(function(message) {
    console.log(message);
  })
  .finally(() => {
    console.log("Always run!");
  });
