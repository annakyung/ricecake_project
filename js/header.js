// header
window.addEventListener("load", function () {
  const moMenuBtn = document.querySelector(".btn-mo-menu");
  const moMenu = document.querySelector(".menu");
  moMenuBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    moMenu.classList.toggle("active");
  });
  moMenu.addEventListener("click", function () {
    moMenuBtn.classList.remove("active");
    this.classList.remove("active");
  });
});
