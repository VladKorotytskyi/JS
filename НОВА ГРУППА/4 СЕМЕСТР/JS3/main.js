const output = document.querySelector('.js-output');
const input = document.querySelector('.js-input');
const coords = document.querySelector(".js-coords");
let mouseMoveCounter = 0;
let inputedElements = 0;
// // Avoid excessively updating the position while scrolling.
// jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 
// // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
// var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
// jQuery(element).on('click', throttled);
 
// // Cancel the trailing throttled invocation.
// jQuery(window).on('popstate', throttled.cancel);

function onMouseMove(event) {
  mouseMoveCounter += 1;
  coords.textContent = `
    Кількість викликів onMouseMove: ${mouseMoveCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
};
window.addEventListener("mousemove", _.throttle(onMouseMove, 500));



function onInputChange(event) {
    inputedElements += 1;
    output.textContent =`
    Кількість викликів onInputChange: ${inputedElements},
    Значення: ${event.target.value}
  `
};
window.addEventListener('input', _.debounce(onInputChange, 300))