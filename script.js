document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById('download-button');

    downloadButton.addEventListener('click', function() {
        window.location.href = 'videos/video4.mp4'; // Percorso corretto del video 4
    });
});
