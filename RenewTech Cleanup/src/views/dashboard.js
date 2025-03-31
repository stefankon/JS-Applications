import { html, render } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getAllitems } from "../data/dataColector.js";
import { mainPath as mainEl } from "../utils.js";


const template = (allItems) => html`<!-- Dashboard page -->
<h2>Solutions</h2>
<section id="solutions">
  <!-- Display a div with information about every post (if any)-->
  ${allItems?.length
    ? html`${allItems.map(item)}`
    : null
  }
</section>
${allItems?.length
    ? null
    : html`<!-- Display an h2 if there are no posts -->
<h2 id="no-solution">No Solutions Added.</h2>`
  }
`;

const item = (solution) => html`<!-- Display a div with information about every post (if any)-->
<div class="solution">
  <img src="${solution.imageUrl}" alt="example1" />
  <div class="solution-info">
    <h3 class="type">${solution.type}</h3>
    <p class="description">
     ${solution.description}
    </p>
    <a class="details-btn" href="/dashboard/${solution._id}">Learn More</a>
  </div>
</div>`;

export async function dashboardView() {
  const userData = getUserData();
  // const mainEl = document.querySelector("main");
  const allItems = await getAllitems();

  navigationView(userData);
  render(template(allItems), mainEl);
}
