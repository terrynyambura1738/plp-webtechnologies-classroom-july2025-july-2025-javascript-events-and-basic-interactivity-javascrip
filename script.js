// Counter
let count = 0;
document.getElementById("countBtn").addEventListener("click", () => {
  count++;
  document.getElementById("countDisplay").textContent = "Count: " + count;
});

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// FAQ Toggle
document.querySelector(".faq").addEventListener("click", () => {
  document.querySelector(".faq-answer").classList.toggle("hidden");
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  if (name === "") {
    message = "Name is required";
  } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    message = "Enter a valid email";
  } else if (password.length < 6) {
    message = "Password must be at least 6 characters";
  } else {
    message = "Form submitted successfully ✅";
  }

  document.getElementById("formMessage").textContent = message;
});
