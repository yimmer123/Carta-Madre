const cartaImg = document.getElementById("cartaImg");
const overlay = document.getElementById("overlay");

const globos1Img = document.getElementById("globos1Img");
const modal_foto1 = document.getElementById("modal_foto1");

cartaImg.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
});

globos1Img.addEventListener("click", () => {
  modal_foto1.classList.toggle("hidden1");
});

// cerrar al hacer click fuera
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.add("hidden");
  }
});

modal_foto1.addEventListener("click", (e) => {
  if (e.target === modal_foto1) {
    modal_foto1.classList.add("hidden1");
  }
});

// CONFETI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for (let i = 0; i < 100; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 3 + 2
  });
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pieces.forEach(p => {
    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;

    const colores = ["#ffffff", "#e6d8ff", "#f5f0ff"];
    ctx.fillStyle = colores[Math.floor(Math.random() * colores.length)];
    ctx.globalAlpha = Math.random() * 0.8 + 0.2;

    ctx.beginPath(); // inicia dibujo
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); // círculo
    ctx.fill();
  });

  requestAnimationFrame(update);
}

update();