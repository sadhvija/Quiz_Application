
// Form submission logic
document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    // Get input values and trim whitespace
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const password = document.getElementById("pswd").value;

    // Validation regex patterns
    const nameRegex = /^[A-Z][a-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in)$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    // Validate name
    if (!nameRegex.test(name)) {
        Swal.fire("Error", "Name must start with an uppercase letter!", "error");
        return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email Format!",
        });
        return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        Swal.fire(
            "Error",
            "Password must contain an uppercase letter, a lowercase letter, a number, a symbol, and be at least 8 characters long.",
            "error"
        );
        return;
    }

    // Store user data in local storage
    localStorage.setItem("storedUsername", name);
    localStorage.setItem("storedEmail", email);
    localStorage.setItem("storedPassword", password);

    // Success message with redirection
    Swal.fire({
        title: "Success!",
        text: "You have signed up successfully!",
        icon: "success",
    }).then(() => {
        window.location.href = "../Login_folder/login.html";
    });
});

