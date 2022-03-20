const button = document.querySelector(".open-modal");
const backgroundModal = document.querySelector(".background");
const modal = document.querySelector(".modal");
const close = document.querySelector(".iconify");

button.addEventListener("click", () => {
  backgroundModal.style.transform = "translateY(0)";
});

document.addEventListener("click", (e) => {
  if (e.target == backgroundModal || e.target == close) {
    backgroundModal.style.transform = "translateY(-1000vw)";
  }
});
