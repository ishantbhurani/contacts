const optionsButtons = document.querySelectorAll(".options-btn");
const contactItems = document.querySelectorAll(".contact");
const addNew = document.querySelector(".add-new");
const modal = document.querySelector(".modal");
const modalForm = modal.querySelector("form");
const backdrop = modal.querySelector(".backdrop");

optionsButtons.forEach((optBtn) =>
  optBtn.addEventListener("click", function () {
    this.parentNode.classList.toggle("show-menu");
    this.blur();
  })
);

contactItems.forEach((contact) =>
  contact.addEventListener("click", function () {
    modal.classList.add("show");
    modalForm.name.value = this.querySelector("h3").textContent;
    modalForm.phone.value = "+(222)-222-222";
  })
);

backdrop.addEventListener("click", function () {
  modal.classList.remove("show");
  modalForm.name.value = "";
  modalForm.phone.value = "";
});

addNew.addEventListener("click", function () {
  modal.classList.add("show");
});
