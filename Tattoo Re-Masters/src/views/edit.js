import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { editItemDetails, getItemDetails } from "../data/dataColector.js";
import { notificationView } from "../errorHandler.js";
import { createSubmitHandler } from "../utils.js";
import { mainPath as mainEl } from "../utils.js";

const template = (data, onEdit) => html`<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form" @submit=${onEdit}>
    <h2>Edit tattoo</h2>
    <form class="edit-form">
      <input
        type="text"
        name="type"
        id="type"
        placeholder="Tattoo Type"
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
      <select id="user-type" name="user-type" .value=${data.userType}>
        <option value="" disabled selected>Select your role</option>
        <option value="Tattoo Artist">Tattoo Artist</option>
        <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
        <option value="First Time in Tattoo">
          First Time in Tattoo
        </option>
        <option value="Tattoo Collector">Tattoo Collector</option>
      </select>
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
    "user-type": userType,
  }) {
    // debugger;
    if (
      !type ||
      !imageUrl ||
      !description ||
      !userType
    ) {
      return notificationView("All fields are required!");
    }
    const updatedData = {
      type,
      imageUrl,
      description,
      userType,
    };
    await editItemDetails(id, updatedData);
    page.redirect(`/dashboard/${id}`);
  }
}


const edt = html`<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <h2>Edit tattoo</h2>
    <form class="edit-form">
      <input
        type="text"
        name="type"
        id="type"
        placeholder="Tattoo Type"
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
      <select id="user-type" name="user-type">
        <option value="" disabled selected>Select your role</option>
        <option value="Tattoo Artist">Tattoo Artist</option>
        <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
        <option value="First Time in Tattoo">
          First Time in Tattoo
        </option>
        <option value="Tattoo Collector">Tattoo Collector</option>
      </select>
      <button type="submit">Edit</button>
    </form>
  </div>
</section>`


const obj = {
  "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
  "type": "Trash Polka",
  "imageUrl": "/images/trash polka.png",
  "description": "A striking Trash Polka tattoo of a skull, combining bold black and red ink with abstract elements, exuding a sense of rebellion and raw artistry.",
  "userType": "First Time in Tattoo",
  "_createdOn": 1617194295480,
  "_id": "136777f5-3277-42ad-b874-76d043b069cb"
};