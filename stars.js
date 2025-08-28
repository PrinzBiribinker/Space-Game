const colors = [
  "#f3effa","#d4c4ef","#b596e3","#9867D5","#763fb1","#4c2775","#27113e"
];

const starsContainer = document.getElementById('stars');

for (let i = 0; i < 200; i++) {
  const star = document.createElement('div');
  star.className = 'star';

  // Zufällige Startposition
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';

  // Zufällige Größe
  const size = 1 + Math.random() * 3;
  star.style.width = size + 'px';
  star.style.height = size + 'px';

  // Farbe aus Palette
  star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Geschwindigkeit
  const speed = 20 + Math.random() * 50; // Pixel pro Sekunde
  star.dataset.speed = speed;

  starsContainer.appendChild(star);
}

// Animation: Sterne bewegen sich horizontal
function animateStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    let left = parseFloat(star.style.left);
    left += star.dataset.speed / 1000; // Geschwindigkeit
    if (left > 100) left = 0; // wieder von links anfangen
    star.style.left = left + '%';
  });
  requestAnimationFrame(animateStars);
}

animateStars();


  starsContainer.appendChild(star);
}


