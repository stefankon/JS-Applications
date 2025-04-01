import { html, render, page } from "../lib.js";
import { headerPath as headerEl } from "../utils.js";

const template = (userData) => html` <!-- Navigation -->
<a id="logo" href="/"
  ><img id="logo" src="./images/logo.png" alt="img"
/></a>
<nav>
  <div>
    <a href="/dashboard">Market</a>
  </div>
    ${userData
    ? html`<!-- Logged-in users -->
  <div class="user">
    <a href="/create">Sell</a>
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
<a id="logo" href="/"
  ><img id="logo" src="./images/logo.png" alt="img"
/></a>
<nav>
  <div>
    <a href="/dashboard">Market</a>
  </div>

  <!-- Logged-in users -->
  <div class="user">
    <a href="/create">Sell</a>
    <a href="/logout">Logout</a>
  </div>

  <!-- Guest users -->
  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
</nav>`