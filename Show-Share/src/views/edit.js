import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { editDroneDetails, getDroneDetails } from "../data/dataColector.js";
import { notificationView } from "../errorHandler.js";
import { createSubmitHandler } from "../utils.js";

const template = (
  data,
  onEdit,
  onDelete
) => html`<!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form form-item">
      <h2>Edit Offer</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
          type="text"
          name="model"
          id="model"
          placeholder="Drone Model"
          .value=${data.model}
        />
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          placeholder="Image URL"
          .value=${data.imageUrl}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          .value=${data.price}
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight"
          .value=${data.weight}
        />
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone Number for Contact"
          .value=${data.phone}
        />
        <input
          type="text"
          name="condition"
          id="condition"
          placeholder="Condition"
          .value=${data.condition}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          .value=${data.description}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>`;

export async function editView(ctx) {
  const { id } = ctx.params;
  const userData = getUserData();
  const mainEl = document.getElementById("main-element");
  const data = await getDroneDetails(id);

  navigationView(userData);
  render(template(data, createSubmitHandler(onEdit)), mainEl);

  async function onEdit({
    model,
    imageUrl,
    price,
    weight,
    phone,
    condition,
    description,
  }) {
    debugger;
    if (
      !model ||
      !imageUrl ||
      !price ||
      !weight ||
      !phone ||
      !condition ||
      !description
    ) {
      return notificationView("All fields are required!");
    }
    const udtatedData = {
      model,
      imageUrl,
      price,
      weight,
      phone,
      condition,
      description,
    };
    await editDroneDetails(id, udtatedData);
    page.redirect(`/dashboard/${id}`);
  }
}
