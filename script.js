// Example of dynamic videos
const videos = [
    { src: 'video1.mp4', type: 'video/mp4' },
    { src: 'video2.mp4', type: 'video/mp4' }
];

const videoSection = document.getElementById('video-section');

videos.forEach(video => {
    const videoElement = document.createElement('video');
    videoElement.setAttribute('controls', true);
    videoElement.setAttribute('src', video.src);
    videoElement.setAttribute('type', video.type);
    videoSection.appendChild(videoElement);
});

// Example of dynamic logos
const logos = [
    { src: 'logo1.png', alt: 'Logo 1' },
    { src: 'logo2.png', alt: 'Logo 2' }
];

const logoSection = document.getElementById('logo-section');

logos.forEach(logo => {
    const logoElement = document.createElement('img');
    logoElement.setAttribute('src', logo.src);
    logoElement.setAttribute('alt', logo.alt);
    logoSection.appendChild(logoElement);
});
