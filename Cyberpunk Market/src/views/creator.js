import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { createItem } from "../data/dataColector.js";
import { notificationView } from "../errorHandler.js";
import { createSubmitHandler } from "../utils.js";
import { mainPath as mainEl } from "../utils.js";

const template = (
  onCreate
) => html`<!-- Create Page (Only for logged-in users) -->
<section id="create">
  <div class="form form-item" @submit=${onCreate}>
    <h2>Share Your item</h2>
    <form class="create-form">
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
      <button type="submit">Add</button>
    </form>
  </div>
</section>`;

export async function createView() {
  const userData = getUserData();
  // const mainEl = document.getElementById("main-element");

  navigationView(userData);
  render(template(createSubmitHandler(onCreate)), mainEl);
}

async function onCreate({
  item,
  imageUrl,
  price,
  availability,
  type,
  description,
}) {
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

  const data = {
    item,
    imageUrl,
    price,
    availability,
    type,
    description,
  }
  await createItem(data);
  page.redirect("/dashboard");
}

