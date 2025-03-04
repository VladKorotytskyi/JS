/*
 * Атрибути
 * - removeAttribute(ім'я-атрибута)
 * - hasAttribute(ім'я-атрибута)
 */

// const listEl = document.querySelector("ul");
// console.log(listEl);
// const firstItemEl = listEl.firstElementChild;
// console.log(firstItemEl);
// const listElOne = firstItemEl.parentElement;
// console.log(listElOne);

const img = document.querySelector(".hero__image");
console.dir(img);
img.src =
  "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";
console.log(img.src);
img.alt = "cat";

console.log(img.hasAttribute("alt"));
img.removeAttribute("alt");

const mainTitle = document.querySelector("h1");
console.log(mainTitle.textContent);
mainTitle.textContent = "Hello";
