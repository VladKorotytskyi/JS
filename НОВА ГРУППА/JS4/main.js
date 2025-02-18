const fnA = function () {}; //функціональний вираз
function fnB() {} //об'явлення функції

const fnC = (a, b) => a + b; //стрілкова функція

/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортує та ЗМІНЮЄ оригінальний масив
 * - За замовчуванням:
 *    - Сортує за зростанням
 *    - приводить елементи в рядок і сортує по [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort((currentNumber, nextNumber) => {
//   console.log(currentNumber, nextNumber);
//   return nextNumber - currentNumber;
// });
// console.log(numbers);
// const letters = ["b", "B", "a", "A"];
// letters.sort((currentLetter, nextLetter) => {
//   return nextLetter - currentLetter;
// });

// const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];

// items.sort((a, b) => {
//   return b.localeCompare(a);
// });
// console.log(items);

// const data = ["delta", "alpha", "charlie", "bravo"];

// data.sort((a, b) => {
//   return a.localeCompare(b);
// });
// console.log(data);
