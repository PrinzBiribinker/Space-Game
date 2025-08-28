const colors = [
  "#f3effa","#d4c4ef","#b596e3","#9867D5","#763fb1","#4c2775","#27113e"
];

const starsContainer = document.getElementById('stars');

for (let i = 0; i < 150; i++) {
  const star = document.createElement('div');
  star.className = 'star';

  // Zufällige Position
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';

  // Zufällige Größe
  const size = 1 + Math.random() * 3;
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  // Zufällige Farbe aus der Palette
  star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Verschiedene Animationsgeschwindigkeiten
  const twinkleDuration = 2 + Math.random() * 3;
  const moveDuration = 5 + Math.random() * 10;

  star.style.animation = `twinkle ${twinkleDuration}s infinite alternate, moveStar ${moveDuration}s linear infinite`;

  // Optional: leichten horizontalen Drift für Parallax
  star.style.transform = `translateX(${Math.random() * 5 - 2.5}px)`;

  starsContainer.appendChild(star);
}

