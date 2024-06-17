document.addEventListener("DOMContentLoaded", function() {
    const protectedButton = document.getElementById('download-button-protected');
    const passwordPrompt = document.getElementById('password-prompt');
    const submitPassword = document.getElementById('submit-password');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    
    const correctPassword = "13/02/2022"; // Imposta la password corretta qui

    protectedButton.addEventListener('click', function() {
        passwordPrompt.style.display = 'block';
    });

    submitPassword.addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            window.location.href = 'video4.mp4'; // Sostituisci 'path_to_video4' con il percorso effettivo
        } else {
            passwordError.style.display = 'block';
        }
    });
});
