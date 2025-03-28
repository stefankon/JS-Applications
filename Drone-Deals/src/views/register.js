import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";
import { register } from "../data/authtent.js";
import { notificationView } from "../errorHandler.js";

const template = (onRegister) => html`<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="register-form"  @submit=${(onRegister)}>
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export function registerView() {
  const mainEl = document.getElementById("main-element");
  render(template(createSubmitHandler(onRegister)),mainEl);
}

async function onRegister({ email, password, "re-password": repass }) {
  
    if (!email || !password) {
        return notificationView('All fields are required!');
    }
    if (password != repass) {
        return notificationView('Passwords don\'t match!');
    }

    await register(email, password);

    // updateNav();
    page.redirect('/');
}
