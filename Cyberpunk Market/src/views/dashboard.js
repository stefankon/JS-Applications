import { html, render } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getAllitems } from "../data/dataColector.js";
import { mainPath as mainEl } from "../utils.js";


const template = (allItems) => html`<!-- Dashboard page -->
<h3 class="heading">Market</h3>
<section id="dashboard">
   <!-- Display a div with information about every post (if any)-->
  ${allItems?.length
    ? html`${allItems.map(item)}`
    : null
  }
</section>
${allItems?.length
    ? null
    : html`<!-- Display an h2 if there are no posts -->
<<h3 class="empty">No Items Yet</h3>`
  }
`;

const item = (solution) => html`
< <div class="item">
    <img src="${solution.imageUrl}" alt="example1" />
    <h3 class="model">${solution.item}</h3>
    <div class="item-info">
      <p class="price">Price: €${solution.price}</p>
      <p class="availability">
        ${solution.availability}
      </p>
      <p class="type">Type: ${solution.type}</p>
    </div>
    <a class="details-btn" href="/dashboard/${solution._id}">Uncover More</a>
  </div>`;

export async function dashboardView() {
  const userData = getUserData();
  // const mainEl = document.querySelector("main");
  const allItems = await getAllitems();

  navigationView(userData);
  render(template(allItems), mainEl);
}


const dash = html`<h3 class="heading">Market</h3>
<section id="dashboard">
  <!-- Display a div with information about every post (if any)-->
  <div class="item">
    <img src="./images/tablet.png" alt="example1" />
    <h3 class="model">Synoptic Eye Tablet</h3>
    <div class="item-info">
      <p class="price">Price: €1000</p>
      <p class="availability">
        Premium retailers, exclusive online stores
      </p>
      <p class="type">Type: Premium Tech</p>
    </div>
    <a class="details-btn" href="#">Uncover More</a>
  </div>
  <div class="item">
    <img src="./images/controller.png" alt="example1" />
    <h3 class="model">Neural Impulse Controller</h3>
    <div class="item-info">
      <p class="price">Price: €799</p>
      <p class="availability">Underground black markets</p>
      <p class="type">Type: Experimental</p>
    </div>
    <a class="details-btn" href="#">Uncover More</a>
  </div>
  <div class="item">
    <img src="./images/drone.png" alt="example1" />
    <h3 class="model">Sky Seeker Drone</h3>
    <div class="item-info">
      <p class="price">Price: €1200</p>
      <p class="availability">Mass-Market Retail, Online Marketplace</p>
      <p class="type">Type: Advanced Surveillance</p>
    </div>
    <a class="details-btn" href="#">Uncover More</a>
  </div>
</section>
<!-- Display an h2 if there are no posts -->
<h3 class="empty">No Items Yet</h3>`


const obj = {
  "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
  "item": "Sky Seeker Drone",
  "imageUrl": "/images/drone.png",
  "price": "1200",
  "availability": "Mass-Market Retail, Online Marketplace",
  "type": "Advanced Surveillance",
  "description": "The Sky Seeker is an invaluable tool for exploration and surveillance. Its compact size and maneuverability make it ideal for navigating tight spaces and gathering data, while its high-resolution cameras provide clear images even in low-light conditions. With the Sky Seeker, you can stay ahead of the curve in the ever-changing world of cyberpunk.",
  "_createdOn": 1617194295480,
  "_id": "136777f5-3277-42ad-b874-76d043b069cb"
}