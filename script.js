/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const videoItems = document.querySelectorAll('.video-item');
    const videoPlayer = document.querySelector('.video-player');
    const mainVideo = document.getElementById('main-video');
    const videoSource = document.getElementById('video-source');

    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            videoSource.src = videoSrc;
            mainVideo.load();
            mainVideo.play();
            videoPlayer.classList.add('active');
        });
    });

    videoPlayer.addEventListener('click', function() {
        mainVideo.pause();
        videoPlayer.classList.remove('active');
    });
});
