import { render, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const root = document.getElementById("wrapper");

// function render(template, urlPath) {
//   if (urlPath) {
//     root = urlPath;
//   }
//   renderBase(template, root);
// }

export { render, html, page };
