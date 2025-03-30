import { html, render, page } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { createDron } from "../data/dataColector.js";
import { notificationView } from "../errorHandler.js";
import { createSubmitHandler } from "../utils.js";

const template = (
  onCreate
) => html`<!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form form-item">
      <h2>Add Drone Offer</h2>
      <form class="create-form" @submit=${onCreate}>
        <input type="text" name="model" id="model" placeholder="Drone Model" />
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          placeholder="Image URL"
        />
        <input type="number" name="price" id="price" placeholder="Price" />
        <input type="number" name="weight" id="weight" placeholder="Weight" />
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone Number for Contact"
        />
        <input
          type="text"
          name="condition"
          id="condition"
          placeholder="Condition"
        />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>`;

export async function createView() {
  const userData = getUserData();
  const mainEl = document.getElementById("main-element");

  navigationView(userData);
  render(template(createSubmitHandler(onCreate)), mainEl);
}

async function onCreate({
  model,
  imageUrl,
  price,
  weight,
  phone,
  condition,
  description,
}) {
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
debugger;

const data = {
  model,
  imageUrl,
  price,
  weight,
  phone,
  condition,
  description,
}
  await createDron(data);
  page.redirect("/dashboard");
}
