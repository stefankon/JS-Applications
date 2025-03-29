// Utils
import { html, render, page } from "./lib.js";
import { logoutView } from "./views/logout.js";

// Views
import { homepageView } from "./views/homepage.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { dashboardView } from "./views/dashboard.js";



page("/", homepageView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/dashboard", dashboardView);
page("/dashboard/:id", detailsView);

page.start();

