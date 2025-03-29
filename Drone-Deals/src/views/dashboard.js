import { html, render } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getAllDorones } from "../data/dataColector.js";

const template = (allDrones) => html` <!-- Dashboard page -->
  <h3 class="heading">Marketplace</h3>
  <section id="dashboard">
    ${allDrones?.length
      ? html`${allDrones.map(items)}`
      : html`<!-- Display an h2 if there are no posts -->
          <h3 class="no-drones">No Drones Available</h3>`}
  </section>`;

const items = (drone) => html`
<!-- Display a div with information about every post (if any)-->
<div class="drone">
      <img src="${drone.imageUrl}" alt="example1" />
    <h3 class="model">${drone.model}</h3>
      <div class="drone-info">
        <p class="price">Price: €${drone.price}</p>
        <p class="condition">Condition: ${drone.condition}</p>
        <p class="weight">Weight: ${drone.weight}g</p>
      </div>
      <a class="details-btn" href="/details">Details</a>
    </div>
  </section>`;

export async function dashboardView() {
  const userData = getUserData();
  const mainEl = document.getElementById("main-element");
  const allDrones = await getAllDorones();

  navigationView(userData);
  render(template(allDrones), mainEl);
}
