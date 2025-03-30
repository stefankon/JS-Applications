import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getDroneDetails, deleteDrone } from "../data/dataColector.js";

const template = (currentDrone, onDelete) => html`<!-- Details page -->

  <section id="details">
    <div id="details-wrapper">
      <div>
        <img id="details-img" src="${currentDrone.imageUrl}" alt="example1" />
        <p id="details-model">${currentDrone.model}</p>
      </div>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="details-price">Price: €${currentDrone.price}</p>
          <p class="details-condition">Condition: ${currentDrone.condition}</p>
          <p class="details-weight">Weight: ${currentDrone.weight}g</p>
          <p class="drone-description">${currentDrone.description}</p>
          <p class="phone-number">Phone: ${currentDrone.phone}</p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${currentDrone.isOwner
          ? html`<div class="buttons">
              <a href="/edit/${currentDrone._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >
            </div>`
          : null}
      </div>
    </div>
  </section> `;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const currentDrone = await getDroneDetails(id);
  const userData = getUserData();
  const mainEl = document.getElementById("main-element");

  if (userData) {
    if (userData._id == currentDrone._ownerId) {
      currentDrone.isOwner = true;
    }
  }

  // console.log(currentDrone);

  navigationView(userData);
  render(template(currentDrone, onDelete), mainEl);

  async function onDelete() {
    const choice = confirm("Are you sure?");

    if (choice) {
      await deleteDrone(id);
      page.redirect("/dashboard");
    }
  }
}
