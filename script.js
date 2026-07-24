// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector("nav ul");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ==========================
// NAVBAR SHADOW ON SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
  } else {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
  }
});

// ==========================
// TYPING EFFECT
// ==========================

const text = "Frontend Developer";

let index = 0;

function typing() {
  const heading = document.querySelector(".hero h2");

  if (index < text.length) {
    heading.innerHTML += text.charAt(index);

    index++;

    setTimeout(typing, 100);
  }
}

if (document.querySelector(".hero h2")) {
  document.querySelector(".hero h2").innerHTML = "";

  typing();
}

// ==========================
// AI CHATBOT
// ==========================

function openAI() {
  let box = document.getElementById("aiBox");

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

function sendAI() {
  let input = document.getElementById("userInput");

  let chat = document.getElementById("chat");

  let question = input.value.toLowerCase();

  if (question.trim() == "") {
    return;
  }

  chat.innerHTML += `
<p><b>You:</b> ${question}</p>
`;

  let reply = "";

  if (question.includes("hi") || question.includes("hello")) {
    reply =
      "Hello 👋 Welcome to Siddharth's portfolio. Ask me about my skills, projects, experience, education or certificates.";
  } else if (question.includes("name")) {
    reply =
      "My name is Siddharth Kumar. I am a Frontend Developer and MCA graduate.";
  } else if (question.includes("skill")) {
    reply =
      "My skills are HTML5, CSS3, JavaScript, React JS, Bootstrap, Git and GitHub.";
  } else if (question.includes("project")) {
    reply =
      "My projects include YouTube Clone, E-Commerce Website, Calculator App and Recipe App.";
  } else if (question.includes("experience")) {
    reply =
      "I worked as Frontend Developer Intern at Supple Soft Pvt Limited, Gurgaon from February 2025 to May 2025.";
  } else if (question.includes("education") || question.includes("mca")) {
    reply =
      "I completed Master of Computer Applications (MCA) from NIET Greater Noida in 2026.";
  } else if (question.includes("certificate")) {
    reply =
      "I have completed Frontend Developer Internship Certificate from Supple Soft Pvt Limited and certificates from Infosys Springboard.";
  } else if (question.includes("resume")) {
    reply =
      "You can download my resume by clicking the Download Resume button on my portfolio.";
  } else if (
    question.includes("contact") ||
    question.includes("email") ||
    question.includes("phone")
  ) {
    reply = "Email: siddharthkumar1082@gmail.com | Phone: 7766052347";
  } else {
    reply =
      "I can tell you about Siddharth's skills, projects, education, experience, certificates and contact details.";
  }

  chat.innerHTML += `
<p><b>Siddharth AI:</b> ${reply}</p>
`;

  input.value = "";

  chat.scrollTop = chat.scrollHeight;
}

// ==========================
// BUTTON CLICK MESSAGE
// ==========================

const hireBtn = document.querySelector(".btn");

if (hireBtn) {
  hireBtn.addEventListener("click", () => {
    console.log("Thanks for visiting my portfolio");
  });
}
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("nav ul");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});