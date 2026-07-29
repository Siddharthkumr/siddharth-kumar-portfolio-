/* ==========================
   BACKGROUND CANVAS ANIMATION
========================== */

const canvas = document.getElementById("bg-canvas");

const ctx = canvas.getContext("2d");

let W, H;

let particles = [];

let mouseX = -9999;

let mouseY = -9999;

function resize() {
  W = canvas.width = window.innerWidth;

  H = canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", resize);

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;

  mouseY = e.clientY;
});

class Particle {
  constructor() {
    this.reset(true);
  }

  reset(init) {
    this.x = Math.random() * W;

    this.y = init ? Math.random() * H : H + 10;

    this.vx = (Math.random() - 0.5) * 0.3;

    this.vy = -Math.random() * 0.35 - 0.1;

    this.r = Math.random() * 1.5 + 0.4;

    this.alpha = Math.random() * 0.5 + 0.1;

    this.hue = Math.random() > 0.5 ? 250 : 330;
  }

  update() {
    const dx = this.x - mouseX;

    const dy = this.y - mouseY;

    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 120) {
      this.vx += (dx / dist) * 0.03;

      this.vy += (dy / dist) * 0.03;
    }

    this.vx *= 0.99;

    this.vy *= 0.99;

    this.x += this.vx;

    this.y += this.vy;

    if (this.y < -10 || this.x < -10 || this.x > W + 10) {
      this.reset(false);
    }
  }

  draw() {
    ctx.beginPath();

    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);

    ctx.fillStyle = `hsla(${this.hue},80%,70%,${this.alpha})`;

    ctx.fill();
  }
}

for (let i = 0; i < 120; i++) {
  particles.push(new Particle());
}

function drawGrid() {
  const spacing = 60;

  for (let x = 0; x < W; x += spacing) {
    for (let y = 0; y < H; y += spacing) {
      const dx = x - mouseX;

      const dy = y - mouseY;

      const dist = Math.sqrt(dx * dx + dy * dy);

      const glow = Math.max(0, 1 - dist / 200);

      ctx.fillStyle = `rgba(108,99,255,${0.1 + glow * 0.4})`;

      ctx.beginPath();

      ctx.arc(x, y, 0.7 + glow * 1.5, 0, Math.PI * 2);

      ctx.fill();
    }
  }
}

/* ==========================
      CANVAS ANIMATION
========================== */

function animate() {
  ctx.clearRect(0, 0, W, H);

  drawGrid();

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;

      const dy = particles[i].y - particles[j].y;

      const d = Math.sqrt(dx * dx + dy * dy);

      if (d < 100) {
        ctx.beginPath();

        ctx.moveTo(particles[i].x, particles[i].y);

        ctx.lineTo(particles[j].x, particles[j].y);

        ctx.strokeStyle = `rgba(108,99,255,${0.12 * (1 - d / 100)})`;

        ctx.lineWidth = 0.5;

        ctx.stroke();
      }
    }
  }

  particles.forEach((p) => {
    p.update();

    p.draw();
  });

  requestAnimationFrame(animate);
}

animate();

/* ==========================
      SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 80);

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

reveals.forEach((item) => {
  observer.observe(item);
});

/* ==========================
        MOBILE MENU
========================== */

const navToggle = document.getElementById("navToggle");

const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("open");

  navToggle.classList.remove("active");

  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  navToggle.classList.toggle("active", isOpen);

  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("open") && !e.target.closest("nav")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("open")) {
    closeMenu();

    navToggle.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900 && navLinks.classList.contains("open")) {
    closeMenu();
  }
});
