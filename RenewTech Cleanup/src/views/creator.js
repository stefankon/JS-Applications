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
  <div class="form" @submit=${onCreate}>
    <img class="border" src="./images/border.png" alt="" />
    <h2>Add Solution</h2>
    <form class="create-form">
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
      <button type="submit">Add Solution</button>
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
  "more-info": learnMore,
}) {
  if (
    !type ||
    !imageUrl ||
    !description ||
    !learnMore   
  ) {
    return notificationView("All fields are required!");
  }

  const data = {
    type,
    imageUrl, 
    description, 
    learnMore,
  }
  await createItem(data);
  page.redirect("/dashboard");
}


