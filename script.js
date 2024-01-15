// Get the DOM elements
const subscribeForm = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email-input");

// Create variables to store the error and success messages
let errorMessage = null;
let successMessage = null;

// Create a regular expression to validate the email address
const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to create a message
function createAlertMessage(type, text) {
  const message = document.createElement("p");
  message.textContent = text;
  message.classList.add("msg", `msg--${type}`);
  message.setAttribute("role", "alert");
  return message;
}

// Add an event listener to the form
subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailValidationRegex.test(emailInput.value)) {
    // Remove the error message if it exists
    if (errorMessage) {
      emailInput.classList.remove("input--error");
      errorMessage.remove();
      errorMessage = null;
    }

    // Only create the success message if it doesn't already exist
    if (!successMessage) {
      successMessage = createAlertMessage("success", "Thanks for subscribing");
      emailInput.removeAttribute("aria-describedby");
      emailInput.removeAttribute("aria-invalid");
      subscribeForm.appendChild(successMessage);
      emailInput.value = "";
      emailInput.blur();
    }
  } else {
    // Remove the success message if it exists
    if (successMessage) {
      successMessage.remove();
      successMessage = null;
    }

    // Only create the error message if it doesn't already exist
    if (!errorMessage) {
      errorMessage = createAlertMessage(
        "error",
        "Please provide a valid email address"
      );
      errorMessage.setAttribute("id", "error");
      emailInput.classList.add("input--error");
      emailInput.setAttribute("aria-describedby", "error");
      emailInput.setAttribute("aria-invalid", "true");
      subscribeForm.appendChild(errorMessage);
      emailInput.blur();
    }
  }
});
