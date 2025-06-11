const container = document.getElementById("carousel-container");
const leftBtn = document.getElementById("carousel-left");
const rightBtn = document.getElementById("carousel-right");

leftBtn.addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});

// Navbar background scroll effect

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
