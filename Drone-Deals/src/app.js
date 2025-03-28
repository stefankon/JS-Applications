// Utils
import { html, render, page } from "./lib.js";
// import page from "page";
import { logoutView } from "./views/logout.js";

// Navigation


// Views
import { homepageView } from "./views/homepage.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";



page("/", homepageView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);

page.start();

