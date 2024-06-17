document.addEventListener("DOMContentLoaded", function() {
    const downloadButtons = document.querySelectorAll('.download-button');
    const protectedButton = document.getElementById('download-button-protected');
    const passwordPrompt = document.getElementById('password-prompt');
    const submitPassword = document.getElementById('submit-password');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    
    const correctPassword = "13/02/2022"; // Set the correct password here

    // Event listener for protected video download button
    protectedButton.addEventListener('click', function() {
        passwordPrompt.style.display = 'block';
    });

    // Event listener for password submission
    submitPassword.addEventListener('click', function() {
        if (passwordInput.value === correctPassword) {
            const link = document.createElement('a');
            link.href = 'videos/video4.mp4';
            link.download = 'video4.mp4';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            passwordError.style.display = 'block';
        }
    });

    // Hide password prompt when clicking outside of it
    window.addEventListener('click', function(event) {
        if (!passwordPrompt.contains(event.target) && event.target !== protectedButton) {
            passwordPrompt.style.display = 'none';
            passwordError.style.display = 'none';
        }
    });

    // Event listeners for download buttons
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            if (this.id !== 'download-button-protected') {
                const videoSrc = this.getAttribute('href');
                const link = document.createElement('a');
                link.href = videoSrc;
                link.download = videoSrc.split('/').pop();
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                event.preventDefault();
            }
        });
    });
});
