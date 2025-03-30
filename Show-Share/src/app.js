// Utils
import { html, render, page } from "./lib.js";
import { logoutView } from "./views/logout.js";

// Views
import { homepageView } from "./views/homepage.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/detailes.js";
import { createView } from "./views/creator.js";
import { editView } from "./views/edit.js";

page("/", homepageView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/dashboard", dashboardView);
page("/dashboard/:id", detailsView);
page("/create", createView);
page("/edit/:id", editView);

page.start();

