import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getItemDetails, deleteItem } from "../data/dataColector.js";
import { mainPath as mainEl } from "../utils.js";
import { createLike, getLikesByTattooId } from "../data/likes.js";

const template = (currentSolution, onDelete, likes, hasLiked, onClck) => html`<!-- Details page -->
<section id="details">
<section id="details">
  <div id="details-wrapper">
    <img
      id="details-img"
      src="${currentSolution.imageUrl}"
      alt="example1"
    />
    <div>
      <div id="info-wrapper">
        <p id="details-type">${currentSolution.type}</p>
        <div id="details-description">
          <p id="user-type">${currentSolution.userType}</p>
          <p id="description">
            ${currentSolution.description}
          </p>
        </div>
        <h3>Like tattoo:<span id="like"></span></h3>
        <div id="action-buttons">
        ${currentSolution.isOwner
    ? html`<!--Edit and Delete are only for creator-->
          <a href="/edit/${currentSolution._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
    : null}
        
    <!--Bonus - Only for logged-in users ( not authors )-->
          <a @click=${onClck} href="javascript:void(0)" id="like-btn">Like</a>
  
          </div>
        </div>
      </div>
    </div>
  </section> `;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const currentSolution = await getItemDetails(id);
  const userData = getUserData();
  // const totalLikes = await getAllLikes(id);
  const likesInfo = await getLikesByTattooId(id);
  currentSolution.isOwner = false;

  if (userData) {
    if (userData._id == currentSolution._ownerId) {
      currentSolution.isOwner = true;
    }
  }

  function onClck() {
    debugger;
    console.log("Hi")
  }

  // debugger;
  const hasLiked = likesInfo.hasLiked || currentSolution.isOwner;
  // console.log(totalLikes);
  navigationView(userData);
  render(template(currentSolution, onDelete, hasLiked, onClck), mainEl);



  async function onLike3() {
    debugger;
    await createLike(id);

    page.redirect('/dashboard/' + id);
  }

  async function onDelete() {
    const choice = confirm("Are you sure?");

    if (choice) {
      await deleteItem(id);
      page.redirect("/dashboard");
    }
  }


  async function onLike2(id) {
    debugger;
    console.log(`onLike: ${id}`)
    const userData = getUserData();
    if (userData) {
      const likeData = { tattooId: id, _ownerId: userData._id };
      console.log('Data being sent to createLike:', likeData); // Log the data
      try {
        const result = await createLike(likeData);
        console.log('Like created successfully:', result);

      } catch (error) {
        console.error('Error creating like:', error);
        // Handle the error (e.g., display a message to the user)
      }
    }
  }
}



const obj = {
  "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
  "type": "Trash Polka",
  "imageUrl": "/images/trash polka.png",
  "description": "A striking Trash Polka tattoo of a skull, combining bold black and red ink with abstract elements, exuding a sense of rebellion and raw artistry.",
  "userType": "First Time in Tattoo",
  "_createdOn": 1617194295480,
  "_id": "136777f5-3277-42ad-b874-76d043b069cb"
};

