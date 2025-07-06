// import { html, render as renderBase } from "../node_modules/lit-html/lit-html.js"
import { html, render as renderBase } from "lit-html"

const app = document.getElementById('app');

const render = (templateResult) => {
    renderBase(templateResult, app)
}

export { 
    html,
    render
}