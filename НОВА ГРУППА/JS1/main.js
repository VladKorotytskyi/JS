// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(function (number) {})

// console.log(filteredNumbers)

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
//   ];

//   /*
//  * Отримуємо масив всіх гравців онлайн
//  */

//   const isOnline = players.filter(function (player) {
//     return player.online
//   })
//   console.log(isOnline);

//   /*
//  * Отримуємо масив всіх гравців офлайн
//  */

//   const isOffline = players.filter(function (player) {
//     return !player.online
//   })
//   console.log(isOffline);

//   /*
//  * Отримуємо масив всіх хардкорних гравців з часом більше 250
//  */

//   const timePlayed = players.filter(function (player) {
//     return player.timePlayed > 250
//   })
//   console.log(timePlayed);

  /*
 * Array.prototype.find()
 * - Поелементо перебирає оригінальний масив
 * - Повертає перший елемент який задовольняє умову пошуку або undefined
 */
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
  ];

  /*
 * Шукаємо гравця по id
 */

//   const playerId = 'player-1'
//   const findIdPlayer = players.find(function(player) {
//     return player.id === playerId
//   })
//   console.log(findIdPlayer)

  /*
 * Шукаємо гравця по імені
 */

  const nameToFind = 'Chelsy'
  const findNamePlayer = players.find(function(player){
    return player.name === nameToFind
  })
  console.log(findNamePlayer);