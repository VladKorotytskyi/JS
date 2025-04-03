const backdropEl = document.querySelector(".backdrop");
const closeButton = document.querySelector('[data-action="close-modal"]');
const openButton = document.querySelector('[data-action="open-modal"]');

closeButton.addEventListener("click", toggleModal);
openButton.addEventListener("click", toggleModal);

function toggleModal() {
  document.body.classList.toggle("show-modal");
}

window.addEventListener("keydown", (event) => {
  //console.log(event.key);
  if (event.key === "Escape") {
    onCloseButton();
  }
});

closeButton.addEventListener("click", onCloseButton);
openButton.addEventListener("click", onOpenButton);

function onOpenButton() {
  document.body.classList.add("show-modal");
}
function onCloseButton() {
  document.body.classList.remove("show-modal");
}

backdropEl.addEventListener("click", onBackdropClose);
function onBackdropClose(event) {
  console.log(event.target);
  console.log(event.currentTarget);
  if (event.currentTarget === event.target) {
    onCloseButton();
  }
}
