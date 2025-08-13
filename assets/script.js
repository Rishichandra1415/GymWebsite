// Mobile nav + theme toggle + year
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("primaryNav");
if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
  });
}
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Theme toggle with localStorage
// const themeToggle = document.getElementById("themeToggle");
// const root = document.documentElement;
// const THEME_KEY = "pulsefit-theme";
// const saved = localStorage.getItem(THEME_KEY);
// if (saved === "light") root.classList.add("light");
// if (themeToggle) {
//   themeToggle.addEventListener("click", () => {
//     root.classList.toggle("light");
//     localStorage.setItem(
//       THEME_KEY,
//       root.classList.contains("light") ? "light" : "dark"
//     );
//   });
// }
