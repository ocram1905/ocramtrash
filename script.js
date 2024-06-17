/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const videoPlayer = document.querySelector('.video-player');
    const videoElement = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');

    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            videoSource.src = videoSrc;
            videoElement.load();
            videoElement.play();
            videoPlayer.classList.add('active');
        });
    });

    videoPlayer.addEventListener('click', function() {
        videoElement.pause();
        videoPlayer.classList.remove('active');
    });
});
