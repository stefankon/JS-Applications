import { html, render, page } from "../lib.js";
import { headerPath as headerEl } from "../utils.js";

const template = (userData) => html` <!-- Navigation -->
<a id="logo" href="/"
  ><img id="logo-img" src="./images/logo2.png" alt="logo"/>
</a>
<nav>
  <div>
    <a href="/dashboard">Solutions</a>
  </div>
    ${userData
    ? html`  <div class="user">
    <a href="/create">Add Solution</a>
    <a href="/logout">Logout</a>
  </div>`
    : html` <!-- Guest users -->
          <div class="guest">
    <a href="/login">Login</a>
    <a href="register">Register</a>
  </div>`}
  </nav>`;

export function navigationView(userData) {
  render(template(userData), headerEl);
}

