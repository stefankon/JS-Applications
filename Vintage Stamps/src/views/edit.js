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
      <input type="text" name="name-input" id="name" placeholder="Stamp Name" .value=${data.name} />
      <input type="text" name="image-url-input" id="image-url" placeholder="Image URL" .value=${data.imageUrl} />
      <input type="number" id="year-input" name="year-input" placeholder="Year"  .value=${data.year} />
      <textarea id="more-info" name="more-info-textarea" placeholder="More Info" rows="8" cols="10" .value=${data.learnMore} ></textarea>
      <button type="submit">Edit</button>
    </form>
  </div>
</section>`;

export async function editView(ctx) {
  const { id } = ctx.params;
  const userData = getUserData();
  const data = await getItemDetails(id);

  navigationView(userData);
  render(template(data, createSubmitHandler(onEdit)), mainEl);

  async function onEdit({
    "name-input": name,
    "image-url-input": imageUrl,
    "year-input": year,
    "more-info-textarea": learnMore,
  }) {
    // debugger;
    if (
      !name ||
      !imageUrl ||
      !year ||
      !learnMore
    ) {
      return notificationView("All fields are required!");
    }
    const updatedData = {
      name,
      imageUrl,
      year,
      learnMore,
    };
    await editItemDetails(id, updatedData);
    page.redirect(`/dashboard/${id}`);
  }
}


const edt = html`<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
  <div class="form">
    <h2>Edit Post Stamp</h2>
    <form class="edit-form">
      <input type="text" name="name-input" id="name" placeholder="Stamp Name" />
      <input type="text" name="image-url-input" id="image-url" placeholder="Image URL" />
      <input type="number" id="year-input" name="year-input" placeholder="Year"  />
      <textarea id="more-info" name="more-info-textarea" placeholder="More Info" rows="8" cols="10"></textarea>
      <button type="submit">Edit</button>
    </form>
  </div>
</section>`


