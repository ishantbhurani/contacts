const optionsButtons = document.querySelectorAll(".options-btn");

optionsButtons.forEach((optBtn) =>
  optBtn.addEventListener("click", function () {
    this.parentNode.classList.toggle("show-menu");
    this.blur();
  })
);
