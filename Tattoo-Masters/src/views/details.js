import { getTattooById } from "../api/tattoo.js";
import { html, render } from "../lib/lithtml.js";
import { getUserData } from "../utils/user.js";

const template = (tattoo, isOwner) => html`
 <!-- Details page -->
 <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src="${tattoo.imageUrl}"
              alt="example1"
            />
            <div>
              <div id="info-wrapper">
                <p id="details-type">${tattoo.type}</p>
                <div id="details-description">
                  <p id="user-type">${tattoo.userType}</p>
                  <p id="description">${tattoo.description}</p>
                </div>
                <h3>Like tattoo:<span id="like">0</span></h3>
                ${isOwner ? html`
                <!-- Edit and Delete are only for creator -->
                <div id="action-buttons">
                  <a href="/edit/${tattoo._id}" id="edit-btn">Edit</a>
                  <a href="#" id="delete-btn">Delete</a>
                <!--Bonus - Only for logged-in users ( not authors )-->
                  <a href="#" id="like-btn">Like</a>
                </div>`
                : null}
              </div>
            </div>
          </div>
        </section>
 `;

export async function detailsView(ctx) {
  const { id } = ctx.params;
  const tattoo = await getTattooById(id);
  console.log(tattoo);
  const userData = getUserData();
  const isOwner = userData?._id === tattoo?._ownerId;


  render(template(tattoo, isOwner));
}