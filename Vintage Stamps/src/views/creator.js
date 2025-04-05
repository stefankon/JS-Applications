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
    <input type="text" name="name-input" id="name-input" placeholder="Stamp Name" />
      <input type="text" name="image-url-input" id="image-url-input" placeholder="Image URL" />
      <input type="number" id="year-input" name="year-input" placeholder="year" />
      <textarea id="more-info-textarea" name="more-info-textarea" placeholder="More Info" rows="8" cols="10"></textarea>
      <button type="submit">Add Stamp</button>
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
  "name-input": name,
  "image-url-input": imageUrl,
  "year-input": year,
  "more-info-textarea": learnMore,
}) {
  if (
    !name ||
    !imageUrl ||
    !year ||
    !learnMore
  ) {
    return notificationView("All fields are required!");
  }

  const data = {
    name,
    imageUrl,
    year,
    learnMore,
  }
  await createItem(data);
  page.redirect("/dashboard");
}

const ctr = html`   <!-- Create Page (Only for logged-in users) -->
<section id="create">
  <div class="form">
    <h2>Add Post Stamp</h2>
    <form class="create-form">
      <input type="text" name="name-input" id="name-input" placeholder="Stamp Name" />
      <input type="text" name="image-url-input" id="image-url-input" placeholder="Image URL" />
      <input type="number" id="year-input" name="year-input" placeholder="year" />
      <textarea id="more-info-textarea" name="more-info-textarea" placeholder="More Info" rows="8" cols="10"></textarea>
      <button type="submit">Add Stamp</button>
    </form>
  </div>
</section>`;

