import { html, render } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { mainPath as mainEl } from "../utils.js";

const template = () => html` <<!-- Home page -->

<section id="hero">
          <img src="./images/home.png" alt="home" />
          <p>We know who you are, we will contact you</p>
        </section>`;

export function homepageView() {
  const userData = getUserData();
  // const mainEl = document.querySelector("main");

  navigationView(userData);
  render(template(), mainEl);
}

