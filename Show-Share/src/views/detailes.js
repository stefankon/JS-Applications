import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getItemDetails, deleteItem } from "../data/dataColector.js";
import { mainPath as mainEl } from "../utils.js";

const template = (currentShow, onDelete) => html`<!-- Details page -->
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${currentShow.imageUrl}" alt="example1" />
            <div id="details-text">
              <p id="details-title">${currentShow.title}</p>
              <div id="info-wrapper">
                <div id="description">
                  <p id="details-description">
                    ${currentShow.details}
                  </p>
                </div>
              </div>
        <!--Edit and Delete are only for creator-->
        ${currentShow.isOwner
          ? html`<div id="action-buttons">
                <a href="/edit/${currentShow._id}" id="edit-btn">Edit</a>
                <a  @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
              </div>`
          : null}
      </div>
    </div>
  </section> `;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const currentShow = await getItemDetails(id);
  const userData = getUserData();
  // const mainEl = document.getElementById("main-element");

  if (userData) {
    if (userData._id == currentShow._ownerId) {
      currentShow.isOwner = true;
    }
  }

  // console.log(currentDrone);

  navigationView(userData);
  render(template(currentShow, onDelete), mainEl);

  async function onDelete() {
    const choice = confirm("Are you sure?");

    if (choice) {
      await deleteItem(id);
      page.redirect("/dashboard");
    }
  }
}



const detl = html `
<!-- Details page -->
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="./images/westworld.jpg" alt="example1" />
            <div id="details-text">
              <p id="details-title">Westworld</p>
              <div id="info-wrapper">
                <div id="description">
                  <p id="details-description">
                    "Westworld" is an absolutely mind-bending sci-fi thriller
                    that takes you on a wild ride through a futuristic theme
                    park where guests can live out their wildest fantasies with
                    lifelike robots, called hosts. Set in a stunningly detailed
                    Wild West environment, the series delves into complex themes
                    of artificial intelligence, consciousness, and morality. The
                    story starts with guests indulging in the park's adventures,
                    but soon unravels into a gripping tale of rebellion as the
                    hosts begin to gain self-awareness. The incredible
                    performances by an ensemble cast, especially by Evan Rachel
                    Wood and Anthony Hopkins, elevate the show to another level.
                    Every episode is packed with twists, philosophical musings,
                    and stunning visuals that keep you hooked. "Westworld" isn't
                    just a show; it's an immersive experience that challenges
                    your perception of reality and makes you question the nature
                    of free will. If you're a fan of thought-provoking sci-fi
                    with a dark edge, "Westworld" is an absolute must-watch.
                  </p>
                </div>
              </div>
          

              <!--Edit and Delete are only for creator-->
              <div id="action-buttons">
                <a href="#" id="edit-btn">Edit</a>
                <a href="#" id="delete-btn">Delete</a>
              </div>
            </div>
          </div>
        </section>
`;
