// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, value) => acc + value, 0);
// console.log(sum); //15

// const tweets = [
//   { id: "01", likes: 15, tags: ["js", "react"] },
//   { id: "02", likes: 11, tags: ["node", "react", "sass"] },
//   { id: "03", likes: 28, tags: ["html", "css"] },
//   { id: "04", likes: 8, tags: ["node", "react"] },
//   { id: "05", likes: 17, tags: ["js", "html"] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes); //79

// const countLikes = (tweets) =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes); //79

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);

// console.log(tags); //['js', 'react', 'node', 'react', 'sass', 'html', 'css', 'node', 'react', 'js', 'html']

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);
// console.log(tags);

// const sumTags = getTags(tweets);
// const getTagSum = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;
//   return acc;
// };

// const countTags = sumTags => sumTags.reduce(getTagSum, {});
// const tagCount = countTags(sumTags);
// console.log(tagCount); //{js: 2, react: 3, node: 2, sass: 1, html: 2, css: 1}

// const numbers = [3, 2, 1, 5, 4];
// console.log(numbers.sort()); //[1, 2, 3, 4, 5]

// const names = ['Tom', 'apple', 'Nick', 'Alex', 'Poll'];
// console.log(names.sort()); //['Alex', 'Nick', 'Poll', 'Tom']

// const users = [
//   { name: "Alex", daysActive: 10 },
//   { name: "Nick", daysActive: 22 },
//   { name: "Anna", daysActive: 3 },
//   { name: "Tom", daysActive: 9 },
// ];

// const sortUsers = (a, b) => b.daysActive - a.daysActive;

// console.log(users.sort(sortUsers));

// const fruits = ["apple", "kiwi", "banana", "orange"];
// fruits.sort(function (a, b) {
//   return b.localeCompare(a);
// });
// console.log(fruits);

// const num = [1, 2, 3, 4, 5, 6, 7, 8];
// // const even = num.filter((x) => x % 2 === 0);
// // const doubled = even.map((x) => x * 2);
// // const reversed = doubled.reverse();
// // console.log(reversed);

// const result = num
//     .filter(x => x % 2 === 0)
//     .map(y => y * 2)
//     .reverse();

// console.log(result);

// const salary = {
//   bob: 1500,
//   anna: 2253,
//   tom: 933,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, amount) => total + amount,
//   0
// );
// console.log(totalSalary);

//Відсортувати масив об'єктів за алфавітом в полі name:
// const arr = [
//     { name: 'John', age: 32 },
//     { name: 'Jane', age: 26 },
//     { name: 'Mike', age: 42 },
//     { name: 'Emily', age: 29 },
//   ];

// // const sortName = (a, b) => a.name - b.name;
// // console.log(arr.sort(sortName));

// arr.sort((a, b) => a.name.localeCompare(b.name));
// console.log(arr);

//Порахувати загальну кількість товарів в кошику
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];
// const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
// console.log(totalAmount);

//Відсортувати по кількості проведенного часу в грі

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// const sortTime = (a, b) => b.timePlayed - a.timePlayed;
// console.log(players.sort(sortTime));
