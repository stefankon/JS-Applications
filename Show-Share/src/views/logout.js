import { page } from "../lib.js";
import { logout } from "../data/authtent.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";

export function logoutView() {
    const userData = getUserData();
    logout();
    navigationView(userData);
    page.redirect('/');
}