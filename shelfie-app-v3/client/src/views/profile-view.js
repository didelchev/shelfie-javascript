import { html,render } from "../lib.js"



const profileTemplate = html`
    <h1>Profile Works</h1>
`

export const showProfileView = () => {
    render(profileTemplate)
    Navigate()
}