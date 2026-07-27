// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// ===========================
// HEADER SHADOW
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
  } else {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
  }

});


// ===========================
// TYPING EFFECT
// ===========================

const typingElement = document.querySelector(".typing-text");

const text = "🚀 Frontend Developer";

let index = 0;

function typing() {

  if (index < text.length) {

    typingElement.innerHTML += text.charAt(index);

    index++;

    setTimeout(typing, 100);

  }

}

typingElement.innerHTML = "";

typing();


// ===========================
// AI CHATBOT OPEN / CLOSE
// ===========================

function openAI() {

  const box = document.getElementById("aiBox");

  if (box.style.display === "block") {

    box.style.display = "none";

  } else {

    box.style.display = "block";

  }

}


// ===========================
// AI CHATBOT
// ===========================

function sendAI() {

  const input = document.getElementById("userInput");

  const chat = document.getElementById("chat");

  const question = input.value.trim();

  if (question === "") return;

  chat.innerHTML += `<p><b>You:</b> ${question}</p>`;

  const q = question.toLowerCase();

  let reply = "";

  if (q.includes("hi") || q.includes("hello")) {

    reply = "Hello 👋 Welcome to Siddharth's Portfolio.";

  }

  else if (q.includes("name")) {

    reply = "My name is Siddharth Kumar.";

  }

  else if (q.includes("skill")) {

    reply = "HTML, CSS, JavaScript, React JS, Bootstrap, Tailwind CSS, Git and GitHub.";

  }

  else if (q.includes("project")) {

    reply = "My projects include YouTube Clone, Movie UI and Calculator App.";

  }

  else if (q.includes("experience")) {

    reply = "Frontend Developer Intern at Supple Soft Pvt. Ltd., Gurgaon (Feb 2025 - May 2025).";

  }

  else if (q.includes("education") || q.includes("mca")) {

    reply = "MCA from NIET Greater Noida (2026).";

  }

  else if (q.includes("resume")) {

    reply = "Please click the Download Resume button on my portfolio.";

  }

  else if (q.includes("contact") || q.includes("email")) {

    reply = "Email: siddharthkumar1082@gmail.com";

  }

  else if (q.includes("phone")) {

    reply = "Phone: +91 7766052347";

  }

  else {

    reply = "Sorry, I don't understand. Please ask about Skills, Projects, Experience, Education or Contact.";

  }

  chat.innerHTML += `<p><b>Siddharth AI:</b> ${reply}</p>`;

  input.value = "";

  chat.scrollTop = chat.scrollHeight;

}


// ===========================
// ENTER KEY SUPPORT
// ===========================

document.getElementById("userInput").addEventListener("keypress", function (e) {

  if (e.key === "Enter") {

    sendAI();

  }

});


// ===========================
// HIRE BUTTON
// ===========================

const hireBtn = document.querySelector(".btn");

hireBtn.addEventListener("click", () => {

  console.log("Thanks for visiting my portfolio!");

});