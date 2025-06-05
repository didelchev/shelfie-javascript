import { getUserData } from "../utils/user-data.js";

const request = (method, url, data) => {
  let options = {
    method, 
    headers: {}};

  // if (method != "GET") {
  //   options = {
  //     method,
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   };
  // }

  if (data) {
    options.headers["content-type"] = "application/json"
    options.body = JSON.stringify(data);
  }

  const userData = getUserData()

  if (userData != null){
    options.headers["X-Authorization"] = userData.accessToken
  }

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch resources");
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};


const get = (url, data) => request('GET', url, data)
const post = (url, data) => request('POST', url, data)
const del = (url, data) => request('DELETE', url, data)
const put = (url, data) => request('PUT', url, data)
const patch = (url, data) => request('PATCH', url, data)
 
export { 
    get,
    post,
    del,
    put,
    patch
}

