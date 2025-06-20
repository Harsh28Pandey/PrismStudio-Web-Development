const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorMessages = document.querySelectorAll(".error-message");
const loader = document.getElementById("loader");
const submitText = document.getElementById("submitText");

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkInputs() {
    let valid = true;

    // Name Validation
    if (nameInput.value.trim().length < 3) {
        showError(nameInput, "Name must be at least 3 characters.");
        valid = false;
    } else {
        clearError(nameInput);
    }

    // Email Validation
    if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, "Enter a valid email address.");
        valid = false;
    } else {
        clearError(emailInput);
    }

    // Message Validation
    if (messageInput.value.trim() === "") {
        showError(messageInput, "Message cannot be empty.");
        valid = false;
    } else if (messageInput.value.length > 500) {
        showError(messageInput, "Message must be less than 500 characters.");
        valid = false;
    } else {
        clearError(messageInput);
    }

    submitBtn.disabled = !valid;
}

function showError(input, message) {
    const error = input.parentElement.querySelector(".error-message");
    error.innerText = message;
    error.style.display = "block";
}

function clearError(input) {
    const error = input.parentElement.querySelector(".error-message");
    error.innerText = "";
    error.style.display = "none";
}

[nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener("input", checkInputs);
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    loader.classList.remove("hidden");
    submitText.textContent = "Sending...";

    setTimeout(() => {
        alert("✅ Form submitted successfully!");
        loader.classList.add("hidden");
        submitText.textContent = "Send Message";
        form.reset();
        submitBtn.disabled = true;
    }, 2000);
});
