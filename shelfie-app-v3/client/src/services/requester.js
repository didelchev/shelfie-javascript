const serverURL = "http://localhost:5000/catalog";

const request = (method, url, data) => {
  let options = {};

  if (method != "GET") {
    options = {
      method,
      headers: {
        "content-type": "application/json",
      },
    };
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch resources");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

request("GET", serverURL);
