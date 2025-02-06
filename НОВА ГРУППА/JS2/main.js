/*
 * Array.prototype.every()
 * - Поелементо перебирає оригінальний масив
 * - Повертає true якщо всі елементи масива задовільняють умову
 */
/*
 * Array.prototype.some()
 * - Поелементо перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масива задовільняє умову
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// const anyHardcorePlayers = players.every(function (player) {
//   return player.timePlayed > 100;
// });
// console.log(anyHardcorePlayers);

// const isAnyOnline = players.some(function (player) {
//   return player.online
// });
// console.log(isAnyOnline)

/*
 * Array.prototype.reduce()
 * - Поелементо перебирає оригінальний масив
 * - Повертає що завгодно 🤯
 * - Замінює все на світі, але використовувати потрібно з розумом
 */

const numbers = [5, 10, 15, 20, 25];

// let total = 0;

// numbers.forEach(function(num){
//     total += num
// })

// const total = numbers.reduce(function (totalSum, number) {
//     console.log('number', number);
//     console.log('totalSum', totalSum);
//     return totalSum += number
// }, 0);
// console.log(total)

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const salaryMas = Object.values(salary);
const totalSalary = salaryMas.reduce(function (total, salary) {
  return (total += salary);
}, 0);
console.log("Total salary:", totalSalary);
