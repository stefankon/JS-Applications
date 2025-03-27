import { html, render } from "../lib.js";
import { getUserData } from "../util.js";

const template = (isAutenticated) => html`<!-- Navigation -->
  <a id="logo" href="#"><img id="logo" src="./images/logo2.png" alt="img" /></a>
  <nav>
    <div>
      <a href="#">Marketplace</a>
    </div>

    ${isAutenticated
      ? html`<!-- Logged-in users -->
          <div class="user">
            <a href="#">Sell</a>
            <a href="#">Logout</a>
          </div>`
      : html`<!-- Guest users -->
          <div class="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>`}
  </nav>`;

const headerEl = document.querySelector("header");

export function renderNavigation(ctx, next) {
  const userData = getUserData();
  const isAutenticated = !!userData?.email;

  render(template(isAutenticated), headerEl);

  // next();
}
