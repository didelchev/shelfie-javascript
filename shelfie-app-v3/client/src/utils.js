import { Navigate } from "./routes.js"

export const render = (component) => {
    root.innerHTML = component
    Navigate()
}


