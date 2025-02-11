const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

/*
 * Рахуємо загальну кількість годин
 */

const totalTime = players.reduce(function (allTime, { timePlayed }) {
  return (allTime += timePlayed);
}, 0);
console.log(totalTime);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags);
  return tags;
}, []);

/*
 * Ведемо статистику тегів
 */
const tagsStats = allTags.reduce(function (obj, tag) {
  if (obj[tag]) {
    obj[tag] += 1;
  } else {
    obj[tag] = 1;
  }
  return obj;
}, {});

console.log(tagsStats);
