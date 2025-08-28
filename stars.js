const colors = [
  "#f3effa", "#d4c4ef", "#b596e3", "#9867D5", "#763fb1", "#4c2775", "#27113e"
];

const starsContainer = document.getElementById('stars');
const totalStars = 200;

// Hilfsfunktion: zufällige Zahl zwischen min und max
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Erzeuge Sterne
for (let i = 0; i < totalStars; i++) {
  const star = document.createElement('div');
  star.className = 'star';

  // Zufällige Größe
  const size = random(1, 3);
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  // Zufällige Startposition
  star.style.top = random(0, 100) + '%';
  star.style.left = random(0, 100) + '%';

  // Farbe
  star.style.backgroundColor = colors[Math.floor(random(0, colors.length))];

  // Typ des Sterns wählen
  const typeRand = Math.random();
  if (typeRand < 0.4) {
    // 40%: Funkelnde Sterne (nur pulsieren)
    const twinkleDuration = random(2, 4);
    star.style.animation = `twinkle ${twinkleDuration}s infinite alternate`;
  } else if (typeRand < 0.7) {
    // 30%: Langsam schwebende Sterne
    const twinkleDuration = random(2, 4);
    const moveDuration = random(8, 15);
    star.style.animation = `twinkle ${twinkleDuration}s infinite alternate, moveStar ${moveDuration}s ease-in-out infinite alternate`;
  } else {
    // 30%: Schnell fliegende Sterne (horizontal)
    const twinkleDuration = random(1.5, 3);
    const speed = random(0.02, 0.1); // % pro frame
    star.dataset.speed = speed;
    star.style.animation = `twinkle ${twinkleDuration}s infinite alternate`;
  }

  starsContainer.appendChild(star);
}

// Animation für schnell fliegende Sterne
function animateFastStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    if (star.dataset.speed) {
      let left = parseFloat(star.style.left);
      left += parseFloat(star.dataset.speed);
      if (left > 100) left = 0;
      star.style.left = left + '%';
    }
  });
  requestAnimationFrame(animateFastStars);
}

animateFastStars();
