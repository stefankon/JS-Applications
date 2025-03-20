import { render as baseRender, html } from "../../node_modules/lit-html.js";

const rootEl = document.querySelector('main');

function render(template) {
    baseRender(template, rootEl);
}

export { render, html };
