const optionsButtons = document.querySelectorAll(".options-btn");
const contactItems = document.querySelectorAll(".contact");
const modal = document.querySelector(".modal");
const modalForm = modal.querySelector("form");

optionsButtons.forEach((optBtn) =>
  optBtn.addEventListener("click", function () {
    this.parentNode.classList.toggle("show-menu");
    this.blur();
  })
);

contactItems.forEach((contact) =>
  contact.addEventListener("click", function () {
    modal.classList.add("show");
  })
);
