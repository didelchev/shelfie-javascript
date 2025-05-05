import { root } from "./constants.js"

export const render = (component) => {
    root.innerHTML = component
}