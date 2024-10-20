const video = document.getElementById('bg-video');

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
});
