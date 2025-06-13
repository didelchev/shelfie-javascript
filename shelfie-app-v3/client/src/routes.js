import { showMessage } from "./utils/notification.js";
import { isAuth } from "./utils/user-data.js";
// Array for storing the routes
const routes = [];
//
export const useRoutes = (path, component, options = {}) => {
  const { isLoggedIn } = options;
  routes.push({ path, component, isLoggedIn });
};

// Recieves a path and checks the routes array for any matches, then runs the component function
const Router = (path) => {
  const dynamicRoute = path.split("/");

  let matchedRoute;

  // Handle dynamic route like /catalog/:bookId
  if (dynamicRoute.includes("catalog") && dynamicRoute[2]) {
    const bookId = path.split("/").pop();

    // CHECK DYNAMIC ROUTES
    matchedRoute = routes.find((route) => route.path === "/catalog/:bookId");

    if (!matchedRoute) {
      showMessage("Non existing path");
      return;
    }

    if (matchedRoute.isLoggedIn && isAuth()) {
      showMessage("You are already logged in");
      return;
    }

    matchedRoute.component(bookId);
    return;
  }

  // CHECK STATIC ROUTES

  matchedRoute = routes.find((route) => route.path === path);

  if (!matchedRoute) {
    showMessage("No such route");
  }

  if (matchedRoute.isLoggedIn && isAuth()) {
    showMessage("You are already logged in");
    return;
  }

  matchedRoute.component();
};

export const Navigate = () => {
  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const linkPath = link.getAttribute("href");

      history.pushState(null, null, link.href);
      Router(linkPath);
    });
  });
};

export const Redirect = (path) => {
  history.pushState(null, null, path);
  Router(path);
};

export const startRouter = () => {
  window.addEventListener("load", () => {
    window.addEventListener("popstate", () => {
      Router(location.pathname);
    });
  });
  Router(location.pathname);
};
