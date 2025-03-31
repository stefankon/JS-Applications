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
            <h2>Add Show</h2>
            <form class="create-form" @submit=${onCreate}>
              <input
              type="text"
              name="title"
              id="title"
              placeholder="TV Show title"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
            />
            <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Genre"
          />
          <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
        />
            <textarea
              id="details"
              name="details"
              placeholder="Details"
              rows="2"
              cols="10"
            ></textarea>
              <button type="submit">Add Show</button>
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
  title,
  "image-url":imageUrl,
  genre,
  country,
  details,
}) {
  if (
    !title ||
    !imageUrl ||
    !genre ||
    !country ||
    !details

  ) {
    return notificationView("All fields are required!");
  }


  const data = {
    title,
    imageUrl,
    genre,
    country,
    details,
  }
  await createItem(data);
  page.redirect("/dashboard");
}
