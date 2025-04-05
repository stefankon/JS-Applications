import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getItemDetails, deleteItem } from "../data/dataColector.js";
import { mainPath as mainEl } from "../utils.js";
import { getLikesById, createLike, hasUserLikes } from "../data/bonusLikes.js";

const template = (currentSolution, onDelete, alreadyLiked, likes, onLike) => html`<!-- Details page -->
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${currentSolution.imageUrl}" alt="example1" />
    <div>
      <p id="details-name">${currentSolution.name}</p>
      <div id="info-wrapper">
        <div id="details-year-description">
          <p id="year-description">
            Year of oldest stamps - <span id="year">${currentSolution.year}</span> 
          </p>
          <p id="more-info">
            ${currentSolution.learnMore}
          </p>
        </div>
      </div>
      <h3>Stamp total likes:<span id="likes">${likes}</span></h3>
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
        ${currentSolution.isOwner
    ? html`
                <a href="/edit/${currentSolution._id}" id="edit-btn">Edit</a>
                <a  @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
    : null}
    <!--Bonus - Only for logged-in users ( not authors )-->
    ${alreadyLiked
    ? null
    : html`
                <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`
  }
    
        </div>
      </div>
    </div>
  </section> `;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const currentSolution = await getItemDetails(id);
  const userData = getUserData();
  const likes = await getLikesById(id);
  const hasLikes = await hasUserLikes(id);
  let alreadyLiked = false;



  if (userData) {
    if (userData._id == currentSolution._ownerId) {
      currentSolution.isOwner = true;
    }
  }

  if (currentSolution.isOwner || hasLikes != 0 || !userData) {
    alreadyLiked = true;
  }
  console.log(alreadyLiked);

  navigationView(userData);
  render(template(currentSolution, onDelete, alreadyLiked, likes, onLike), mainEl);

  async function onDelete() {
    const choice = confirm("Are you sure?");

    if (choice) {
      await deleteItem(id);
      page.redirect("/dashboard");
    }
  }

  async function onLike() {
    await createLike(id);
    page.redirect(`/dashboard/${id}`);
  }


}


const detl = html`  <!-- Details page -->
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="./images/France 1858.webp" alt="example1" />
    <div>
      <p id="details-name">Bordeaux 40c</p>
      <div id="info-wrapper">
        <div id="details-year-description">
          <p id="year-description">
            Year of oldest stamps - <span id="year">1870</span> 
          </p>
          <p id="more-info">
            France 1870 - Yvert & Tellier No. 48 - Bordeaux Issue - 40 centimes Orange
            This is a 40 centimes orange stamp from the Bordeaux issue, released during the Franco-Prussian War in
            1870. Printed under emergency conditions, Bordeaux issue stamps are known for their crude yet
            historically significant production.
            Mint Condition (new), with original gum.
          </p>
        </div>
      </div>
      <h3>Stamp total likes:<span id="likes">0</span></h3>

      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        <a href="#" id="edit-btn">Edit</a>
        <a href="#" id="delete-btn">Delete</a>

        <!--Bonus - Only for logged-in users ( not authors )-->
        <a href="#" id="like-btn">Like</a>
      </div>
    </div>
  </div>
</section>`;


const obj = {
  "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
  "name": "Losenstein 5Pf",
  "imageUrl": "/images/Austria 1945.webp",
  "year": "1945",
  "learnMore": "Austria 1945 - Local Issue - Losenstein 5 Pfennig with Inverted Overprint. A rare local issue from Losenstein, Austria, issued in the turbulent post-war period of 1945. This stamp is notable for its inverted overprint, making it a highly collectible variety.",
  "_createdOn": 1617194295480,
  "_id": "136777f5-3277-42ad-b874-76d043b069cb"
}