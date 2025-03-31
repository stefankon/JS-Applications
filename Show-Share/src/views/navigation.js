import { html, render, page } from "../lib.js";
import { headerPath as headerEl} from "../utils.js";
// const headerEl = document.querySelector("header");
// TODO replace with actual layout
const template = (userData) => html` <a id="logo" href="/"
    ><img id="logo-img" src="./images/show_logo.png" alt="logo" />
  </a>
  <nav>
    <div>
      <a href="/dashboard">TV Shows</a>
      <a href="#">Search</a>
    </div>
    ${userData
      ? html`<!-- Logged-in users -->
          <div class="user">
            <a href="/create">Add Show</a>
            <a href="/logout">Logout</a>
          </div>`
      : html` <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
  </nav>`;

export function navigationView(userData) {
  render(template(userData), headerEl);
}
