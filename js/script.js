// Get the DOM elements
const subscribeForm = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-btn");

// Create the error and success messages
let errorMessage = null;
let successMessage = null;

// Add an event listener to the form
subscribeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value)) {
    // Remove the success message if it exists
    if (successMessage) {
      successMessage.remove();
      successMessage = null;
    }

    // Only create the error message if it doesn't already exist
    if (!errorMessage) {
      errorMessage = document.createElement("p");
      errorMessage.textContent = "Please provide a valid email address";
      errorMessage.classList.add("msg");
      errorMessage.classList.add("error-msg");
      subscribeForm.appendChild(errorMessage);
    }

    // Change the border color of the input field and display the error message
    emailInput.style.borderColor = "var(--clr-tertiary)";
    errorMessage.style.display = "block";
  } else {
    // Remove the error message if it exists
    if (errorMessage) {
      errorMessage.remove();
      errorMessage = null;
    }

    // Only create the success message if it doesn't already exist
    if (!successMessage) {
      successMessage = document.createElement("p");
      successMessage.textContent = "Thanks for subscribing";
      successMessage.classList.add("msg");
      successMessage.classList.add("success-msg");
      subscribeForm.appendChild(successMessage);
    }

    // Change the border color of the input field and display the success message
    emailInput.style.borderColor = "#c2d3ff";
    successMessage.style.display = "block";
    emailInput.value = "";
  }
});
