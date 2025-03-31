import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getItemDetails, deleteItem } from "../data/dataColector.js";
import { mainPath as mainEl } from "../utils.js";

const template = (currentSolution, onDelete, userData) => html`<!-- Details page -->
<section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src="${currentSolution.imageUrl}"
              alt="example1"
            />
            <div>
              <p id="details-type">${currentSolution.type}</p>
              <div id="info-wrapper">
                <div id="details-description">
                  <p id="description">
                    ${currentSolution.description}
                  </p>
                  <p id="more-info">
                    ${currentSolution.learnMore}
                  </p>
                </div>
              </div>
              <h3>Like Solution:<span id="like">0</span></h3>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
        ${currentSolution.isOwner
        ? html`
                <a href="/edit/${currentSolution._id}" id="edit-btn">Edit</a>
                <a  @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
        : null}
        ${userData
        ? html`<!--Bonus - Only for logged-in users ( not authors )-->
                <a href="#" id="like-btn">Like</a>`
        : null}
        </div>
      </div>
    </div>
  </section> `;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const currentSolution = await getItemDetails(id);
  const userData = getUserData();
  // const mainEl = document.getElementById("main-element");

  if (userData) {
    if (userData._id == currentSolution._ownerId) {
      currentSolution.isOwner = true;
    }
  }

  // console.log(currentDrone);

  navigationView(userData);
  render(template(currentSolution, onDelete, userData), mainEl);

  async function onDelete() {
    const choice = confirm("Are you sure?");

    if (choice) {
      await deleteItem(id);
      page.redirect("/dashboard");
    }
  }
}

