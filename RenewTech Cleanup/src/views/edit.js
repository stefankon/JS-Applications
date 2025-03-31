import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { editItemDetails, getItemDetails } from "../data/dataColector.js";
import { notificationView } from "../errorHandler.js";
import { createSubmitHandler } from "../utils.js";
import { mainPath as mainEl } from "../utils.js";

const template = (data, onEdit) => html`<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <img class="border" src="./images/border.png" alt="" />
    <h2>Edit Solution</h2>
    <form class="edit-form" @submit=${onEdit}>
      <input
        type="text"
        name="type"
        id="type"
        placeholder="Solution Type"
        .value=${data.type}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${data.imageUrl}
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
        .value=${data.description}
      ></textarea>
      <textarea
        id="more-info"
        name="more-info"
        placeholder="more Info"
        rows="2"
        cols="10"
        .value=${data.learnMore}
      ></textarea>
      <button type="submit">Edit</button>
    </form>
  </div>
</section>`;

export async function editView(ctx) {
  const { id } = ctx.params;
  const userData = getUserData();
  // const mainEl = document.getElementById("main-element");
  const data = await getItemDetails(id);

  navigationView(userData);
  render(template(data, createSubmitHandler(onEdit)), mainEl);

  async function onEdit({
    type,
    "image-url": imageUrl,
    description,
    "more-info": learnMore,
  }) {
    // debugger;
    if (
      !type ||
      !imageUrl ||
      !description ||
      !learnMore
    ) {
      return notificationView("All fields are required!");
    }
    const updatedData = {
      type,
      imageUrl,
      description,
      learnMore,
    };
    await editItemDetails(id, updatedData);
    page.redirect(`/dashboard/${id}`);
  }
}


const edt = html`  <!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <img class="border" src="./images/border.png" alt="" />
    <h2>Edit Solution</h2>
    <form class="edit-form">
      <input
        type="text"
        name="type"
        id="type"
        placeholder="Solution Type"
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      ></textarea>
      <textarea
        id="more-info"
        name="more-info"
        placeholder="more Info"
        rows="2"
        cols="10"
      ></textarea>
      <button type="submit">Edit</button>
    </form>
  </div>
</section>`