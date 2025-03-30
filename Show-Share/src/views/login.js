import { html, render, page } from "../lib.js";
import { login } from "../data/authtent.js";
import { createSubmitHandler } from "../utils.js";
import { notificationView } from "../errorHandler.js";

const loginTemplate = (onLogin) => html` <!-- Login Page (Only for Guest users) -->
<section id="login">
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

export function loginView() {
  const mainEl = document.querySelector("main");
  render(loginTemplate(createSubmitHandler(onLogin)), mainEl);

  async function onLogin({ email, password }, form) {
    // debugger;
    if (email == "" || password == "") {
      return notificationView("All fields are required");
    }

    await login(email, password);
    form.reset();

    page.redirect("/");
  }
}
