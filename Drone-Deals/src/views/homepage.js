import { html, render } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";

const template = () => html`<section id="hero">
  <p>
    Discover the best deals on drones! Buy, sell, and trade top-quality drones
    with ease on Drone Deals - your trusted marketplace for all things drone.
  </p>
</section>`;

export function homepageView() {
  const userData = getUserData();
  const mainEl = document.getElementById("main-element");

  navigationView(userData);
  render(template(), mainEl);
}
