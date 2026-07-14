// =========================================================
// Netflix Landing Page Clone — script.js
// =========================================================

// ---------- Trending Now carousel ----------
// Placeholder titles + random poster images (picsum.photos).
// Swap the `img` URLs for real posters later.
const trendingTitles = Array.from({ length: 10 }, (_, i) => {
  const n = i + 1;
  return {
    rank: n,
    title: `Placeholder Show ${n}`,
    img: `https://picsum.photos/seed/nf${n}/320/460`,
    fallback: `assets/posters/poster${n}.svg`,
  };
});

const trendingRow = document.getElementById("trendingRow");

function renderTrending() {
  trendingRow.innerHTML = trendingTitles
    .map(
      (item) => `
      <div class="trend-card" title="${item.title}">
        <span class="trend-card__rank">${item.rank}</span>
        <img class="trend-card__img" src="${item.img}" alt="${item.title}" loading="lazy"
          onerror="this.onerror=null;this.src='${item.fallback}'" />
      </div>`
    )
    .join("");
}

renderTrending();

// Arrow scrolling
const leftArrow = document.getElementById("trendLeft");
const rightArrow = document.getElementById("trendRight");
const SCROLL_AMOUNT = 600;

leftArrow.addEventListener("click", () => {
  trendingRow.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  trendingRow.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
});

// Hide arrows at the ends of the row
function updateArrows() {
  const maxScroll = trendingRow.scrollWidth - trendingRow.clientWidth;
  leftArrow.disabled = trendingRow.scrollLeft <= 5;
  rightArrow.disabled = trendingRow.scrollLeft >= maxScroll - 5;
}

trendingRow.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);
updateArrows();

// ---------- FAQ accordion ----------
document.querySelectorAll(".faq__question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq__item");
    const wasOpen = item.classList.contains("open");

    // Netflix only keeps one answer open at a time
    document
      .querySelectorAll(".faq__item.open")
      .forEach((openItem) => openItem.classList.remove("open"));

    if (!wasOpen) item.classList.add("open");
  });
});

// ---------- Email form validation ----------
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setupEmailForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const input = form.querySelector(".email-form__input");
  const error = form.querySelector(".email-form__error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();

    if (!value) {
      error.textContent = "Email is required.";
      return;
    }

    if (!EMAIL_REGEX.test(value)) {
      error.textContent = "Please enter a valid email address.";
      return;
    }

    error.textContent = "";
    // No backend yet — just acknowledge the signup for now.
    alert(`Thanks! We'd send ${value} to the signup flow here.`);
  });

  input.addEventListener("input", () => {
    error.textContent = "";
  });
}

setupEmailForm("heroEmailForm");
setupEmailForm("faqEmailForm");
