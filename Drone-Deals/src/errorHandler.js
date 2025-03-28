


export function notificationView(message){
    return alert(message);
}


function displayError(message) {
    const notifications = document.getElementById('notifications');
    const errorBox = document.getElementById('errorBox');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
  
    // Clear previous messages
    errorBox.innerHTML = '';
    errorBox.appendChild(errorMessage);
  
    // Show the error box
    errorBox.style.display = 'block';
  
    // Hide the error box after 3 seconds
    setTimeout(() => {
      errorBox.style.display = 'none';
    }, 3000);
  }
  
