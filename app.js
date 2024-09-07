// Get the "Contact Me" button
var contactButton = document.getElementById('contactButton');
// Function to handle click event
function handleContactClick() {
    alert("Thank you for reaching out! You can contact me via phone or email.");
}
// Adding event listener to the button
if (contactButton) {
    contactButton.addEventListener('click', handleContactClick);
}
