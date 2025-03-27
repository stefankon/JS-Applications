import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";
import { customAlert } from "../errorHandler.js";
import { login } from "../data/user.js";

const template = (onLogin) => html` <section id="login">
  <div class="form">
    <h2>Login</h2>
    <form class="login-form" @submit=${onLogin}>
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
  </div>
</section>`;

export function loginView(ctx) {
  // ctx.render(template(createSubmitHandler(onLogin)));
  render(template(createSubmitHandler(onLogin)));
}

async function onLogin(email, password) {
  if (!email || !password) {
    return customAlert("All fields are required!");
  }
  await login(email, password);

  // form.reset();
  updateNav();
  // ctx.page.redirect("/");
  page.redirect("/");
}
