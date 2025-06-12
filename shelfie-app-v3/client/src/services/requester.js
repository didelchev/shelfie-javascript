import { Redirect } from "../routes.js";
import { showMessage } from "../utils/notification.js";
import { updateNav } from "../utils/update-nav.js";
import { clearUserData, getUserData } from "../utils/user-data.js";

const request = (method, url, data) => {

  const userData = getUserData()

  let options = {
    method, 
    headers: {}};

  if (data) {
    options.headers["content-type"] = "application/json"
    options.body = JSON.stringify(data);
  }


  if (userData != null){
    options.headers["X-Authorization"] = userData.accessToken
  }

  return fetch(url, options)
    .then((response) => {
      if(response.status === 401) {
        clearUserData()
        updateNav()
        return Promise.reject('Session expired, please login again.')
      }
      if(!response.ok){
        return Promise.reject('Failed to fetch resource   ')
      }
      return response.json(); 
    })
    .catch((error) => {
      showMessage(error)
      throw error
    });
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

