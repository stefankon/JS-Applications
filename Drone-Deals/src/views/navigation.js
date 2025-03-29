import { html, render, page } from "../lib.js";
const headerEl = document.querySelector("header");
// TODO replace with actual layout
const template = (userData) => html` <!-- Navigation -->
  <a id="logo" href="/"><img id="logo" src="./images/logo2.png" alt="img" /></a>
  <nav>
    <div>
      <a href="/dashboard">Marketplace</a>
    </div>
    ${userData
      ? html`
          <!-- Logged-in users -->
          <div class="user">
            <a href="#">Sell</a>
            <a href="/logout">Logout</a>
          </div>
        `
      : html`
          <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        `}
  </nav>`;

export function navigationView(userData) {
  render(template(userData), headerEl);
}
