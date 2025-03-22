import { getAllTattoos } from "../api/tattoo.js";
import { html, render } from "../lib/lithtml.js";

const template = (tattoos) => html`
<!-- Dashboard page -->
<h2>Collection</h2>
        <section id="tattoos">
        <!-- Display a div with information about every post (if any)-->
        ${tattoos?.length ? tattoos.map((t) =>
    html`<div class="tattoo">
            <img src="${t.imageUrl}" alt="example1" />
            <div class="tattoo-info">
              <h3 class="type">${t.type}</h3>
              <span>Uploaded by </span>
              <p class="user-type">${t.userType}</p>
              <a class="details-btn" href="/dashboard/${t._id}">Learn More</a>
            </div>
          </div>`)
        : html `<!-- Display an h2 if there are no posts -->
        <h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`}
        </section>`;

export async function dashboardView() {
    const tattoos = await getAllTattoos();

    render(template(tattoos));
}