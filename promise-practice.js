const URL = "https://dog.ceo/api/breeds/image/random";

async function getDogImage(url) {
  let response = await fetch(url);

  let jsonData = await response.json();

  return jsonData;
}

getDogImage(URL).then(
  data => (document.getElementById("api_element").src = data.message)
);
