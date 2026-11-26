
const pages = document.querySelectorAll(".page");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const pageCount = document.getElementById("pageCount");
const progress = document.getElementById("progress");
const navLabel = document.getElementById("navLabel");

let currentPage = 0;

const chapterNames = [
  "The Beginning",
  "Dear Kajal",
  "The Vision",
  "Coding Journey",
  "Hackathon Adventures",
  "Our Team",
  "Working Roadmap",
  "Our Goals",
  "The Invitation"
];

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

  navLabel.textContent = chapterNames[index];

  document.querySelector(".notebook").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
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

document.getElementById("acceptBtn").addEventListener("click", () => {
  const message = document.getElementById("responseMessage");

  message.textContent =
    "A new chapter begins! Let's make something amazing together. ✨";
});

document.getElementById("thinkBtn").addEventListener("click", () => {
  const message = document.getElementById("responseMessage");

  message.textContent =
    "Of course! Take your time. Every good idea deserves a thoughtful decision. ♡";
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" && currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }

  if (event.key === "ArrowLeft" && currentPage > 0) {
    showPage(currentPage - 1);
  }
});

showPage(0);
