import { html, render } from "../lib.js";
import { navigationView } from "./navigation.js";
import { getUserData } from "../utils.js";
import { getAllitems } from "../data/dataColector.js";
import { mainPath as mainEl } from "../utils.js";


const template = (allItems) => html`<!-- Dashboard page -->
<h2>Users Recommendations</h2>
<section id="shows">
  ${allItems?.length
    ? html`${allItems.map(item)}`
    : null
  }
</section>
${allItems?.length
    ? null
    : html`<!-- Display an h2 if there are no posts -->
<h2 id="no-show">No shows Added.</h2>`
  }
`;

const item = (show) => html`<!-- Display a div with information about every post (if any)-->
  <div class="show">
    <img src="${show.imageUrl}" alt="example1" />
    <div class="show-info">
      <h3 class="title">${show.title}</h3>
      <p class="genre">Genre: ${show.genre}</p>
      <p class="country-of-origin">Country of Origin: ${show.country}</p>
      <a class="details-btn" href="/dashboard/${show._id}">Details</a>
    </div>
  </div>`;

export async function dashboardView() {
  const userData = getUserData();
  // const mainEl = document.querySelector("main");
  const allItems = await getAllitems();

  navigationView(userData);
  render(template(allItems), mainEl);
}

// obj
const obj = {
  _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a",
  title: "Friends",
  imageUrl: "/images/friends.jpg",
  genre: "Comedy",
  country: "United States",
  details:
    '"Friends" is the ultimate feel-good sitcom that has charmed audiences around the globe with its hilarious, heartwarming, and unforgettable moments. Set in New York City, it follows the lives of six inseparable friends—Rachel, Ross, Monica, Chandler, Joey, and Phoebe—as they navigate the ups and downs of life, love, and friendship. With its iconic catchphrases, memorable storylines, and the perfect blend of humor and heartfelt drama, "Friends" effortlessly captures the essence of camaraderie and the joy of having a close-knit group of friends. From the infamous Central Perk coffeehouse to unforgettable episodes like "The One Where No One\'s Ready" and "The One with the Prom Video," this show is a timeless classic that never fails to bring laughter and warmth. Whether you\'re binge-watching for the hundredth time or discovering it for the first time, "Friends" is a comforting and delightful escape into the lives of six beloved characters who will always feel like family.',
  _createdOn: 1617194295480,
  _id: "136777f5-3277-42ad-b874-76d043b069cb",
};
