// app.js

// Registration Form Submission
document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        email: document.getElementById("registerEmail").value,
        password: document.getElementById("registerPassword").value,
        // Add any other required fields here, such as `name`, `age`, etc.
    };

    try {
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Registration successful!");
            window.location.href = "/login.html"; // Redirect to login page
        } else {
            const data = await response.json();
            alert("Registration failed: " + (data.message || "Please try again."));
        }
    } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred. Please try again later.");
    }
});

// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value,
    };

    try {
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Login successful!");
            window.location.href = "/dashboard.html"; // Redirect to dashboard
        } else {
            alert("Login failed. Check your email and password.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again later.");
    }
});
