import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { editItemDetails, getItemDetails } from "../data/dataColector.js";
import { notificationView } from "../errorHandler.js";
import { createSubmitHandler } from "../utils.js";
import { mainPath as mainEl } from "../utils.js";

const template = (data, onEdit) => html` <!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <h2>Edit Show</h2>
    <form class="edit-form" @submit=${onEdit}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="TV Show title"
        .value=${data.title}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${data.imageUrl}
      />
      <input
      type="text"
      name="genre"
      id="genre"
      placeholder="Genre"
      .value=${data.genre}
    />
    <input
    type="text"
    name="country"
    id="country"
    placeholder="Country"
    .value=${data.country}
  />
      <textarea
        id="details"
        name="details"
        placeholder="Details"
        rows="2"
        cols="10"
        .value=${data.details}
      ></textarea>
      <button type="submit">Edit Show</button>
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
    title,
    "image-url": imageUrl,
    genre,
    country,
    details,
  }) {
    // debugger;
    if (
      !title ||
      !imageUrl ||
      !genre ||
      !country ||
      !details
    ) {
      return notificationView("All fields are required!");
    }
    const updatedData = {
      title,
      imageUrl,
      genre,
      country,
      details,
    };
    await editItemDetails(id, updatedData);
    page.redirect(`/dashboard/${id}`);
  }
}
