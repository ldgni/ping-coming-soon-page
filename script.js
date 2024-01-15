// Get the DOM elements
const subscribeForm = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email-input");

// Create the error and success messages
let errorMessage = null;
let successMessage = null;

// Add an event listener to the form
subscribeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput.value)) {
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
      successMessage.classList.add("msg--success");
      successMessage.setAttribute("role", "alert");
      emailInput.setAttribute("aria-invalid", "false");
      subscribeForm.appendChild(successMessage);
    }

    // Change the border color of the input field and display the success message
    emailInput.style.borderColor = "#c2d3ff";
    successMessage.style.display = "block";
    emailInput.value = "";
  } else {
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
      errorMessage.classList.add("msg--error");
      errorMessage.setAttribute("role", "alert");
      emailInput.setAttribute("aria-invalid", "true");
      subscribeForm.appendChild(errorMessage);
    }

    // Change the border color of the input field and display the error message
    emailInput.style.borderColor = "#FF5466";
    errorMessage.style.display = "block";
  }
});
