// loader.js

// Load CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://raw.githubusercontent.com/MuhammadAhmadAslam/CDN-WORK/main/style.css';
document.head.appendChild(link);

// Load JavaScript
const script = document.createElement('script');
script.src = 'https://raw.githubusercontent.com/MuhammadAhmadAslam/CDN-WORK/main/script.js';
document.body.appendChild(script);

// Load HTML content
fetch('https://raw.githubusercontent.com/MuhammadAhmadAslam/CDN-WORK/main/index.html')
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML += data; // Append HTML content to body
    })
    .catch(error => console.error('Error loading HTML:', error));
