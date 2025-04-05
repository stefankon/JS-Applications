import { html, render } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getAllitems } from "../data/dataColector.js";
import { mainPath as mainEl } from "../utils.js";


const template = (allItems) => html`<!-- Dashboard page -->
<h2>Collection</h2>
<section id="tattoos">
  <!-- Display a div with information about every post (if any)-->
  ${allItems?.length
    ? html`${allItems.map(item)}`
    : null
  }
</section>
${allItems?.length
    ? null
    : html`<!-- Display an h2 if there are no posts -->
<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`
  }
`;

const item = (solution) => html` <div class="tattoo">
<img src="${solution.imageUrl}" alt="example1" />
<div class="tattoo-info">
  <h3 class="type">${solution.type}</h3>
  <span>Uploaded by </span>
  <p class="user-type">${solution.userType}</p>
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


const dash = html``;

;


