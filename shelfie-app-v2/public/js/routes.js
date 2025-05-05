import { homeView } from "./views/home.js";

const root = document.getElementById("root");
const links = document.querySelectorAll(".link");

const routes = {
  "/": () => {
    root.innerHTML = homeView;
  },
  "/catalog": () => {
    root.innerHTML = `<h1>Catalog Page</h1>`;
  },
  "/login": () => {
    root.innerHTML = `<h1>Login Page</h1>`;
  },
  "/register": () => {
    root.innerHTML = `<h1>Register Page</h1>`;
  },
};


const Router = (path) => {

    if(!routes[path]){
        root.innerHTML = `<h1>404 Page Not Found</h1>`
    }else{
        routes[path]();
    }
}


export const Navigate = () => {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const linkPath = link.getAttribute('href');

      history.pushState(null, null, link.href);      

      Router(linkPath)
    })
  })
}


window.addEventListener('load', () => {
    window.addEventListener('popstate', () => {
        Router(location.pathname)
    })
})

Router(location.pathname)

Navigate();