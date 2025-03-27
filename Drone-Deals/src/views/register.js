import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";
import { register } from "../data/user.js";
import { customAlert } from "../errorHandler.js";

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
  render(template(createSubmitHandler(onRegister)));
}

async function onRegister({ email, password, "re-password": repass }) {
  
    if (!email || !password) {
        return customAlert('All fields are required!');
    }
    if (password != repass) {
        return customAlert('Passwords don\'t match!');
    }

    await register(email, password);

    updateNav();
    page.redirect('/');
}
