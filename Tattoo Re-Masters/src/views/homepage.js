import { html, render } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { mainPath as mainEl } from "../utils.js";

const template = () => html` <<!-- Home page -->
<section id="home">
  <div id="home-wrapper">
    <p id="home-intro">
      Whether you're a seasoned artist, a collector of ink, or someone
      looking for inspiration for their first tattoo,
      <span>Tattoo Masters</span> is your community. Share your
      masterpieces, discover incredible designs, and connect with
      artists and aficionados from around the world.
    </p>
    <a href="/register" id='join-us'>Join Us!</a>
  </div>
</section>`;

export function homepageView() {
  const userData = getUserData();
  // const mainEl = document.querySelector("main");

  navigationView(userData);
  render(template(), mainEl);
}
