// Show / hide hamburger menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navigation-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
});

document.querySelectorAll(".navigation-item a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});
