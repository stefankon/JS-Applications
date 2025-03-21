// console.log("Hi");

import { page } from "./lib/page.js";
// import page from "../../node_modules/page/page.mjs";

import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js"
import { registerView } from "./views/register.js";
import { createView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { editView } from "./views/edit.js"



page("/", homeView);
page("/login", loginView);
page("/logout", logoutView);
page("/register", registerView);
page("/create", createView);

page("/dashboard", dashboardView);
page("/edit", editView );

page();
