// Farben deiner Palette
const colors = [
  "#f3effa",
  "#d4c4ef",
  "#b596e3",
  "#9867D5",
  "#763fb1",
  "#4c2775",
  "#27113e"
];

// Sterne generieren
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 150; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  star.style.animationDuration = (2 + Math.random() * 3) + "s";
  starsContainer.appendChild(star);
}

