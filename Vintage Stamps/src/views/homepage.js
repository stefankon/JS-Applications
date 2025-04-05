import { html, render } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { mainPath as mainEl } from "../utils.js";

const template = () => html`<!-- Home page -->

<section id="home">
  <h1>
    Explore a world of rare and historic vintage stamps, where collectors connect to exchange knowledge and unique
    finds. Preserve the art of philately while discovering hidden gems from different eras and regions.
  </h1>
  <img id="home-img" src="./images/logo.webp" alt="home-img" />
</section>`;

export function homepageView() {
  const userData = getUserData();
  // const mainEl = document.querySelector("main");

  navigationView(userData);
  render(template(), mainEl);
}

