// const titleEl = document.querySelector(".title");
// titleEl.textContent = "Hello <span>User</span>";
// console.log(titleEl.textContent);
// titleEl.innerHTML = "Hello <div>User</div>";
// console.log(titleEl.innerHTML);

const articleEL = document.querySelector(".js-container");


// const product = {
//     name: "Товар-2",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
//     price: 3000,
//     available: false,
//     onSale: false,
//   };
// articleEL.innerHTML = `<article class="product">
// <h2 class="product__name">Назва: ${product.name}</h2>
// <p class="product__descr">Опис: ${product.description}</p>
// <p product__pridct>Ціна: ${product.price}</p>
// </article>;`;

export const products = [
  {
    name: "Товар-2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 3000,
    available: false,
    onSale: false,
  },
  {
    name: "Товар-3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 1500,
    available: true,
    onSale: false,
  },
  {
    name: "Товар-4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 2500,
    available: false,
    onSale: false,
  },
];

const articles = products.map((product) => {
  return `<article class="product">
<h2 class="product__name">Назва: ${product.name}</h2>
<p class="product__descr">Опис: ${product.description}</p>
<p product__pridct>Ціна: ${product.price}</p>
</article>`;
});
console.log(articles);

articleEL.innerHTML = articles.join('');
