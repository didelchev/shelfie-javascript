import { html, render as renderBase } from "../node_modules/lit-html/lit-html.js"

const root = document.getElementById('root');

const render = (templateResult) => {
    renderBase(templateResult, root)
}

export { 
    html,
    render
}