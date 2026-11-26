
const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");
const envelopeSection = document.getElementById("envelopeSection");
const diary = document.getElementById("diary");

const pages = document.querySelectorAll(".page");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const pageCount = document.getElementById("pageCount");
const progress = document.getElementById("progress");
const chapterName = document.getElementById("chapterName");

let currentPage = 0;
let opened = false;

const chapters = [
  "The Beginning",
  "A Little Introduction",
  "Why You Are Special",
  "Things I Never Said",
  "My Favourite Feeling",
  "My Little Dreams",
  "A Little Promise",
  "Our Little Universe",
  "One Special Question",
  "The Final Chapter"
];

// Open envelope
openLetter.addEventListener("click", () => {
  if (opened) return;

  opened = true;
  envelope.classList.add("open");
  openLetter.style.opacity = "0";

  setTimeout(() => {
    envelopeSection.style.display = "none";
    diary.classList.add("show");
    showPage(0);
    diary.scrollIntoView({ behavior: "smooth" });
  }, 1100);
});

// Change notebook pages
function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });

  currentPage = index;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === pages.length - 1;

  pageCount.textContent =
    `${String(index + 1).padStart(2, "0")} / ${String(pages.length).padStart(2, "0")}`;

  progress.style.width =
    `${((index + 1) / pages.length) * 100}%`;

  chapterName.textContent = chapters[index];
}

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (!diary.classList.contains("show")) return;

  if (event.key === "ArrowRight" && currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }

  if (event.key === "ArrowLeft" && currentPage > 0) {
    showPage(currentPage - 1);
  }
});

// Proposal responses
const answerMessage = document.getElementById("answerMessage");

document.getElementById("yesBtn").addEventListener("click", () => {
  answerMessage.textContent =
    "A beautiful new chapter begins! ❤️✨";

  createHearts(35);
});

document.getElementById("timeBtn").addEventListener("click", () => {
  answerMessage.textContent =
    "Take all the time you need, Kajal. Your feelings matter. ♡";
});

document.getElementById("noBtn").addEventListener("click", () => {
  answerMessage.textContent =
    "Thank you for being honest, Kajal. I respect your feelings. ♡";
});

// Floating hearts
function createHearts(amount = 1) {
  const container = document.getElementById("hearts");

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 7500);
  }
}

setInterval(() => createHearts(2), 1800);
