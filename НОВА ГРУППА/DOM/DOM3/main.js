/*
 * Інтерфейс classList
 * - add(клас)
 * - remove(клас)
 * - toggle(клас)
 * - replace(старийКлас, новийКлас)
 * - contains(клас)
 */

// const linkEl = document.querySelector(".site-nav__link");
// console.log(linkEl);

// const navListEl = document.querySelector(".site-nav");
// console.log(navListEl);

// linkEl.style.color = "green";
// linkEl.style.backgroundColor = "aqua";

const mainTitle = document.querySelector(".hero__title");
console.log(mainTitle.classList);
mainTitle.classList.add("main__title");
// mainTitle.classList.remove("hero__title");
// mainTitle.addEventListener('click', () => {
//     mainTitle.classList.toggle('toggle');
// })
// mainTitle.addEventListener("click", () => {
//   mainTitle.classList.replace('main__title', 'replace');
// });

mainTitle.addEventListener("click", () => {
  console.log(mainTitle.classList.contains('contains'))
});
