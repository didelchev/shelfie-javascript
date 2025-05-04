const root = document.getElementById("root");
const links = document.querySelectorAll(".link");

const routes = {
  "/": () => {
    root.innerHTML = `<h1>Home Page</h1>`;
  },
  "/catalog": () => {
    root.innerHTML = `<h1>Home Page</h1>`;
  },
  "/login": () => {
    root.innerHTML = `<h1>Home Page</h1>`;
  },
  "/register": () => {
    root.innerHTML = `<h1>Home Page</h1>`;
  },
};


const Router = (path) => {

    if(!routes[path]){
        root.innerHTML = `<h1>404 Page Not Found</h1>`
    }else{
        routes[path]();
    }
}


links.forEach((link) => {
    link.addEventListener("click", (e) => {

        e.preventDefault();

        const linkPath = link.getAttribute('href');

        history.pushState(null, null, link.href);

        Router(linkPath)
        
    })
})

