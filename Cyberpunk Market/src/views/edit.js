import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { editItemDetails, getItemDetails } from "../data/dataColector.js";
import { notificationView } from "../errorHandler.js";
import { createSubmitHandler } from "../utils.js";
import { mainPath as mainEl } from "../utils.js";

const template = (data, onEdit) => html`<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form form-item">
    <h2>Edit Your Item</h2>
    <form class="edit-form" @submit=${onEdit}>
      <input type="text" name="item" id="item" placeholder="Item" .value=${data.item} />
      <input
        type="text"
        name="imageUrl"
        id="item-image"
        placeholder="Your item Image URL"
        .value=${data.imageUrl}
      />
      <input
        type="text"
        name="price"
        id="price"
        placeholder="Price in Euro"
        .value=${data.price}
      />
      <input
        type="text"
        name="availability"
        id="availability"
        placeholder="Availability Information"
        .value=${data.availability}
      />
      <input
        type="text"
        name="type"
        id="type"
        placeholder="Item Type"
        .value=${data.type}
      />
      <textarea
        id="description"
        name="description"
        placeholder="More About The Item"
        rows="10"
        cols="50"
        .value=${data.description}
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
    item,
    imageUrl,
    price,
    availability,
    type,
    description,
  }) {
    // debugger;
    if (
      !item ||
      !imageUrl ||
      !price ||
      !availability ||
      !type ||
      !description
    ) {
      return notificationView("All fields are required!");
    }
    const updatedData = {
      item,
      imageUrl,
      price,
      availability,
      type,
      description,
    };
    await editItemDetails(id, updatedData);
    page.redirect(`/dashboard/${id}`);
  }
}


const edt = html`  <!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form form-item">
    <h2>Edit Your Item</h2>
    <form class="edit-form">
      <input type="text" name="item" id="item" placeholder="Item" />
      <input
        type="text"
        name="imageUrl"
        id="item-image"
        placeholder="Your item Image URL"
       />
      <input
        type="text"
        name="price"
        id="price"
        placeholder="Price in Euro"
      />
      <input
        type="text"
        name="availability"
        id="availability"
        placeholder="Availability Information"
      />
      <input
        type="text"
        name="type"
        id="type"
        placeholder="Item Type"
      />
      <textarea
        id="description"
        name="description"
        placeholder="More About The Item"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Edit</button>
    </form>
  </div>
</section>`


