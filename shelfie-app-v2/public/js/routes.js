// Array for storing the routes
const routes = []


// 
export const useRoutes = (path, component) => {
  routes.push({path, component})
}


// Recieves a path and checks the routes array for any matches, then runs the component function
const Router = (path) => {
    routes.forEach((potentialPath) => {
      if(potentialPath.path === path) {
          potentialPath.component()
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


