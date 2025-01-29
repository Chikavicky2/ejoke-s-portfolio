// Get the form and thank-you message elements
const contactForm = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

// Add a submit event listener to the form
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Optionally: Add validation or send data to a server (via Fetch or AJAX)

  // Show the thank-you message
  thankYouMessage.style.display = 'block';

  // Reset the form (optional)
  contactForm.reset();
});