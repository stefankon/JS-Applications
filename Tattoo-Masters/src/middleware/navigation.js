import { html, render } from "../lib/lithtml.js";
import { getUserData } from "../utils/user.js";

const template = (isAutenticated) => html`
        <!-- Navigation -->
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt="logo" />
        </a>
        <nav>
          <a href="/dashboard">Collection</a>

        
           ${isAutenticated
                ?
            html `<!-- Logged-in users -->
          <div class="user">
            <a href="/create">Add Tattoo</a>
            <a id="logout" href="/logout">Logout</a>
          </div>`
                :
            html `<!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`
           }
        </nav>
`;

const headerEl = document.querySelector("header")

export function renderNavigation(ctx, next) {
    const userData = getUserData();
    const isAutenticated = !!userData?.email;

    render(template(isAutenticated), headerEl);

    next();
};