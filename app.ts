// Get the "Contact Me" button
const contactButton = document.getElementById('contactButton');

// Function to handle click event
function handleContactClick(): void {
  alert("Thank you for reaching out! You can contact me via phone or email.");
}

// Adding event listener to the button
if (contactButton) {
  contactButton.addEventListener('click', handleContactClick);
}
