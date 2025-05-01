const root = document.getElementById('root');
const links  = document.querySelectorAll('.link');


const Routes = {
   "/home": () => (root.innerHTML = '<h1>Home Page</h1>'),
   "/catalog": () => (root.innerHTML = '<h1>Catalog Page</h1>'),
   "/login": () => (root.innerHTML = '<h1>Login Page</h1>'),
   "/register": () => (root.innerHTML = '<h1>Register Page</h1>'),
}

const Router = (path) => {
    if (Routes[path]){
        Routes[path]()
    }else{
        root.innerHTML = '<h1>Page Not Found 404</h1>'
    }

}

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        let page = link.getAttribute('href')
        history.pushState(null, null, page)
        Router(page)
    })
})

Router(location.pathname)

window.addEventListener('load', () => {
    window.addEventListener('popstate', () => {
        Router(location.pathname)
    })
})


