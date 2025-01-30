// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message encrypted and sent! 🔒');
    e.target.reset();
});

// Matrix-like background effect (optional)
// Add canvas-based animation here if you want extra flair!
// Add sound effects for terminal interactions
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playTerminalSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(1000 + Math.random() * 500, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Add to input event listener:
document.getElementById('command-input').addEventListener('keypress', (e) => {
    playTerminalSound();
    // ... existing code ...
});

