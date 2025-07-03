// Dark mode toggle
document.getElementById("toggle-dark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if (!name || !email || !message) {
        formMsg.textContent = "Please fill in all fields.";
        formMsg.style.color = "red";
        return;
    }

    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
        formMsg.textContent = "Please enter a valid email.";
        formMsg.style.color = "red";
        return;
    }

    formMsg.textContent = "Message submitted successfully!";
    formMsg.style.color = "green";
});