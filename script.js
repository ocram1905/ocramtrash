document.addEventListener("DOMContentLoaded", function() {
    const protectedButton = document.getElementById('download-button');
    const passwordPrompt = document.getElementById('password-prompt');
    const submitPassword = document.getElementById('submit-password');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    
    const correctPassword = "your_password"; // Imposta la password corretta qui

    protectedButton.addEventListener('click', function() {
        passwordPrompt.style.display = 'block';
    });

    submitPassword.addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            window.location.href = 'videos/video4.mp4'; // Percorso corretto del video 4
        } else {
            passwordError.style.display = 'block';
        }
    });
});
