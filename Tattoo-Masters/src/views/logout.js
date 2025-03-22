import { html, render } from "../lib/lithtml.js";
import { page } from "../lib/page.js";
import { logout } from "../api/user.js";

// const template = () => html``;


// export function logoutView() {
//     render(template());
// }

export function logoutView() {
    // render(template());
    logout().then(() => {
        page.redirect("/");
    });
}