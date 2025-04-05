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
  <div class="form">
    <h2>Add tattoo</h2>
    <form class="create-form" @submit=${onCreate}>
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
      <button type="submit">Add tattoo</button>
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
  type,
  "image-url": imageUrl,
  description,
  "user-type": userType,
}) {
  if (
    !type ||
    !imageUrl ||
    !description ||
    !userType
  ) {
    return notificationView("All fields are required!");
  }

  const data = {
    type,
    imageUrl,
    description,
    userType,
  }
  await createItem(data);
  page.redirect("/dashboard");
}

