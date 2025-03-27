// Utils
import { html, render, page } from "./lib.js";
import { logoutView } from "./views/logout.js";
import { updateNav } from "./util.js";
// Navigation
updateNav();

// Views
import { homepageView } from "./views/homepage.js";
import { loginView } from "./views/loginpage.js";
import { registerView } from "./views/register.js";

page("/", homepageView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);

page.start();

