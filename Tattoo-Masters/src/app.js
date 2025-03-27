import { page } from "./lib/page.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js"
import { registerView } from "./views/register.js";
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { renderNavigation } from "./middleware/navigation.js";

//Middlewares
page(renderNavigation);

// Routing pages
page("/", homeView);
page("/login", loginView);
page("/logout", logoutView);
page("/register", registerView);
page("/create", createView);
page("/dashboard", dashboardView);
page("/dashboard/:id", detailsView);
page("/edit/:id", editView);
// Stat page
page();
