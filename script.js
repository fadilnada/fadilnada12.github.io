// Tombol mulai
const startBtn = document.getElementById('start-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');

startBtn.addEventListener('click', () => {
  welcomeScreen.style.opacity = 0;
  setTimeout(() => {
    welcomeScreen.style.display = 'none';
    mainContent.style.display = 'block';
  }, 1000);
});

// Toggle Musik
const btn = document.getElementById("music-btn");
const music = document.getElementById("bg-music");

btn.onclick = () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔊 Musik Hidup";
  } else {
    music.pause();
    btn.textContent = "🔇 Musik Mati";
  }
};

// Animasi hati jatuh
const hearts = document.querySelector('.hearts');
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);
