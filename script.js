// Get the DOM elements
const subscribeForm = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email-input");

// Create a regular expression to validate the email address
const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Add an event listener to the form
subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Remove existing error message
  const existingErrorMessage = document.getElementById("error-message");
  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }

  // Check if the email address is invalid
  if (!emailValidationRegex.test(emailInput.value)) {
    // Create an error message
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "Please provide a valid email address";
    errorMessage.id = "error-message";
    errorMessage.className = "form__error-msg";
    errorMessage.setAttribute("role", "alert");

    // Append the error message to the form
    subscribeForm.appendChild(errorMessage);

    // Add the error styles to the input field
    emailInput.classList.add("form__input--error");
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.setAttribute("aria-describedby", "error-message");
  } else {
    // Remove the error styles from the input field
    emailInput.classList.remove("form__input--error");
    emailInput.removeAttribute("aria-invalid");
    emailInput.removeAttribute("aria-describedby");

    // Clear the input field and remove focus
    emailInput.value = "";
    emailInput.blur();
  }
});
