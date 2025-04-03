const refs = {
  output: document.querySelector(".js-output"),
  clearBtn: document.querySelector(".js-clear"),
};
window.addEventListener("keydown", onKeypress);

function onKeypress(event) {
  console.log(event);
  console.log("event.code: ", event.code);
  console.log("event.key: ", event.key);
}
