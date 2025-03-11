// const titleEl = document.createElement("h1");
// titleEl.classList.add("page__title");
// titleEl.textContent = "My first element";
// titleEl.style.color = "red";
// console.log(titleEl);

// /* Створюємо зображення
//  * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
//  * valais-alpine-mountains-glacier
//  */

// const imgRef = document.createElement("img");
// imgRef.src =
//   "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
// imgRef.alt = "valais-alpine-mountains-glacier";
// imgRef.width = 250;
// console.log(imgRef);

// const heroEl = document.querySelector(".hero");
// // heroEl.appendChild(titleEl);
// // heroEl.appendChild(imgRef);

// heroEl.append(titleEl, imgRef)
// console.log(heroEl);

//----------------------------------

//<li class="site-nav__item">
//<a href="" class="site-nav__link">Контакти</a>
//</li>

const siteNav = document.querySelector(".site-nav");
const itemEl = document.createElement("li");
itemEl.classList.add("site-nav__item");
const linkEl = document.createElement("a");
linkEl.href = "";
linkEl.classList.add("site-nav__link");
linkEl.textContent = "Про компанію";

itemEl.appendChild(linkEl);
siteNav.append(itemEl);
