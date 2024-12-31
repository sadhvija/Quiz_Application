document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();

    if (!email) {
        alert('Please enter your email address!');
        return;
    }

    alert('If this email exists in our system, a reset link will be sent!');
    window.location.href = '../Signup_folder/signup.html';
});
