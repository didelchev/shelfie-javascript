// Array for storing the routes
const routes = [];

//
export const useRoutes = (path, component) => {
  routes.push({ path, component });
  console.log(routes)
};

// Recieves a path and checks the routes array for any matches, then runs the component function
const Router = (path) => {
  const dynamicRoute = path.split("/");

  if (dynamicRoute.includes("catalog") && dynamicRoute[2]) {
    let bookId = path.split("/").pop();

    const potentialRoute = routes.find((route) =>
      route.path.includes("/catalog/:bookId")
    );

    potentialRoute ? potentialRoute.component(bookId) : alert("no path");
  } else {
    const route = routes.find((route) => route.path === path);
    route ? route.component() : alert("No such route");
  }
};

export const Navigate = () => {
  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const linkPath = link.getAttribute("href");

      history.pushState(null, null, link.href);
      console.log(linkPath)
      Router(linkPath);
    });
  });
};

export const Redirect = (path) => {
    history.pushState(null,null, path)
    Router(path)
}
 
export const startRouter = () => {
  window.addEventListener("load", () => {
    window.addEventListener("popstate", () => {
      Router(location.pathname);
    });
  });

  Router(location.pathname);

  Navigate();
};
