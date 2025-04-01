const errorBox = document.getElementById("errorBox");
const errorMessage = document.querySelector(".msg");

export function notificationView(message) {
errorMessage.textContent = message;
errorBox.style.display = 'inline-block';

  setTimeout(() => {
    errorBox.style.display = "none";
  }, 3000);
}

// export function notificationView(message) {
//   return alert(message);
// }
