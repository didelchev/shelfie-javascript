import { bookComponent } from "./components/bookComponent.js";
import { catalogComponent } from "./components/catalogComponent.js";
import { homeComponent } from "./components/homeComponent.js";
import { loginComponent } from "./components/loginComponent.js";
import { registerComponent } from "./components/registerComponent.js";



// const routes = [
//   { path: '/', component: homeComponent },
//   { path: '/catalog', component: catalogComponent},
//   { path: '/login', component: loginComponent},
//   { path: '/register', component: registerComponent},
//   { path: '/book-details', component: bookComponent },

// ]
const routes = []


export const useRoutes = (path, component) => {
  routes.push({path, component})
}

const Router = (path) => {
    routes.forEach((routesPath) => {
      if(routesPath.path === path) {
          routesPath.component()
      }
    })
};

export const Navigate = () => {
  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const linkPath = link.getAttribute("href");

      history.pushState(null, null, link.href);

      Router(linkPath)
    });
  });
};

export const startRouter = () => {
  window.addEventListener("load", () => {
    window.addEventListener("popstate", () => {
      Router(location.pathname);
    });
  });

  Router(location.pathname);

  Navigate()
};


