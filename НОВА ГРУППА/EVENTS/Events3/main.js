const formEl = document.querySelector(".js-register-form");

// formEl.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//   event.preventDefault();
//   console.dir(event.currentTarget.elements.email.value);
//   event.currentTarget.reset();
// };
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  alert(
    `Ім'я: ${event.currentTarget.elements.name.value}, телефон: ${event.currentTarget.elements.phone.value}`
  );
  event.currentTarget.reset();
}
