import { page } from "../lib.js";
import { logout } from "../data/user.js";
import { updateNav } from "../util.js";

export function logoutView() {
    logout();
    updateNav();
    page.redirect('/');
}