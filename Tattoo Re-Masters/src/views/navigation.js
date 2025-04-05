import { html, render, page } from "../lib.js";
import { headerPath as headerEl } from "../utils.js";

const template = (userData) => html` <!-- Navigation -->
<a id="logo" href="/"
  ><img id="logo-img" src="./images/logo.png" alt="logo" />
</a>
<nav>
<a href="/dashboard">Collection</a>
    ${userData
    ? html`<!-- Logged-in users -->
  <div class="user">
    <a href="/create">Add Tattoo</a>
    <a href="/logout">Logout</a>
  </div>`
    : html`<!-- Guest users -->
  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>`}
  </nav>`;

export function navigationView(userData) {
  render(template(userData), headerEl);
}

const navi = html`<!-- Navigation -->
<a id="logo" href="#"
  ><img id="logo-img" src="./images/logo.png" alt="logo" />
</a>
<nav>
  <a href="#">Collection</a>

  <!-- Logged-in users -->
  <div class="user">
    <a href="#">Add Tattoo</a>
    <a id="logout" href="#">Logout</a>
  </div>

  <!-- Guest users -->
  <div class="guest">
    <a href="#">Login</a>
    <a href="#">Register</a>
  </div>
</nav>`


