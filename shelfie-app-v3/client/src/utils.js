import { root } from "./constants.js"
import { Navigate } from "./routes.js"

export const render = (component) => {
    root.innerHTML = component
    Navigate()
}

// export function render(html) {
//   document.getElementById('root').innerHTML += html;
// }