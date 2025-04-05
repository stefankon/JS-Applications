import { html, render } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getAllitems } from "../data/dataColector.js";
import { mainPath as mainEl } from "../utils.js";


const template = (allItems) => html`<!-- Dashboard page -->
<h2>Collection</h2>
<section id="collection">
   <!-- Display a div with information about every post (if any)-->
  ${allItems?.length
    ? html`${allItems.map(item)}`
    : null
  }
</section>
${allItems?.length
    ? null
    : html`<!-- Display an h2 if there are no posts -->
<h2 id="no-stamp">No Stamps Added.</h2>`
  }
`;

const item = (solution) => html`
<div class="stamp">
    <img src="${solution.imageUrl}" alt="example1" />
    <div class="stamp-info">
      <h3 class="name">${solution.name}</h3>
      <p class="year-description">
        Year of oldest stamps - <span class="year">${solution.year}</span> 
      </p>
      <a class="learn-more-btn" href="/dashboard/${solution._id}">Learn More</a>
    </div>
  </div>`;

export async function dashboardView() {
  const userData = getUserData();
  // const mainEl = document.querySelector("main");
  const allItems = await getAllitems();

  navigationView(userData);
  render(template(allItems), mainEl);
}


const dash = html`   <!-- Dashboard page -->
<h2>Collection</h2>
<section id="collection">
  <!-- Display a div with information about every post (if any)-->
  <div class="stamp">
    <img src="./images/Austria 1858.webp" alt="example1" />
    <div class="stamp-info">
      <h3 class="name">KK Blue</h3>
      <p class="year-description">
        Year of oldest stamps - <span class="year">1858</span> 
      </p>
      <a class="learn-more-btn" href="#">Learn More</a>
    </div>
  </div>
  <div class="stamp">
    <img src="./images/France 1858.webp" alt="example2" />
    <div class="stamp-info">
      <h3 class="name">Bordeaux 40c</h3>
      <p class="year-description">
        Year of oldest stamps - <span class="year">1870</span> 
      </p>
      <a class="learn-more-btn" href="">Learn More</a>
    </div>
  </div>
  <div class="stamp">
    <img src="./images/Austria 1945.webp" alt="example3" />
    <div class="stamp-info">
      <h3 class="name">Losenstein 5Pf</h3>
      <p class="year-description">
        Year of oldest stamps - <span class="year">1945</span> 
      </p>
      <a class="learn-more-btn" href="#">Learn More</a>
    </div>
  </div>
   <!-- Display an h2 if there are no posts -->
<h2 id="no-stamp">No Stamps Added.</h2>
</section>`


const obj = {
  "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
  "name": "Losenstein 5Pf",
  "imageUrl": "/images/Austria 1945.webp",
  "year": "1945",
  "learnMore": "Austria 1945 - Local Issue - Losenstein 5 Pfennig with Inverted Overprint. A rare local issue from Losenstein, Austria, issued in the turbulent post-war period of 1945. This stamp is notable for its inverted overprint, making it a highly collectible variety.",
  "_createdOn": 1617194295480,
  "_id": "136777f5-3277-42ad-b874-76d043b069cb"
}