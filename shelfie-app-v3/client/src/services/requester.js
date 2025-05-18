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



const get = request.bind(null, 'GET')
const post = request.bind(null, 'POST')
const del = request.bind(null, 'DELETE')
const put = request.bind(null, 'PUT')
const patch = request.bind(null, 'PATCH')

export { 
    get,
    post,
    del,
    put,
    patch
}

