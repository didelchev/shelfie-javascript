// import { Navigate } from "./routes.js"

// export const render = (component) => {
//     root.innerHTML = component
//     Navigate()
// }




const Router = (path) => { 
    const dynamicRoute = 'catalog'

    if( path.split("/")[1] === dynamicRoute && path.split("/")[2]){
        const bookId = path.split().pop()
    }
}