import { redirect } from "../routes.js";
import { showMessage } from "./notification.js";
import { updateNav } from "./update-nav.js";
import { clearUserData, getUserData } from "./user-data.js";

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
        redirect('/login')
        return Promise.reject('Unauthorized - please login to your account !')
      }
      if(!response.ok){
        return response.json()
          .then(data => {
            throw new Error(data.message)
          })
        
      }
      return response.json(); 
    })
    .catch((error) => {
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

