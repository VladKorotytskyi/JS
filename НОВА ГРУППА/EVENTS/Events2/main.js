const inputEl = document.querySelector(".js-input");
const checkboxEl = document.querySelector(".js-license");
const buttonEl = document.querySelector(".js-button");
const spanEl = document.querySelector(".js-button span");
const rangeEl = document.querySelector(".js-range");

inputEl.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  spanEl.textContent = event.currentTarget.value;
});
checkboxEl.addEventListener("change", (event) => {
  console.log(event.currentTarget.checked);
  if(event.currentTarget.checked) {
      buttonEl.disabled = false;
  } else {
      buttonEl.disabled = true
  }
  buttonEl.disabled = !event.currentTarget.checked;
});

// inputEl.addEventListener("focus", (event) => {
//     console.log(event.currentTarget.value)
// });
// inputEl.addEventListener("blur", (event) => {
//     console.log(event.currentTarget.value)
// });
rangeEl.addEventListener("change", (event) => {
  console.log(event.currentTarget.value);
});
