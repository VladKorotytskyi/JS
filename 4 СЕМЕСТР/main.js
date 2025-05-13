const btnContainer = document.querySelector('.js-container');
const btnText = document.querySelector('.button-name');
btnContainer.addEventListener('click', (event) => {
    console.log(event.target.textContent);
    btnText.textContent = event.target.textContent;
});