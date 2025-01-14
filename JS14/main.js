//Imperative
// const numbers = [1, 2, 3, 4, 5, 6];
// const filteredNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 3) {
//         filteredNumbers.push(numbers[i]);
//     }
// }
// console.log(filteredNumbers); //[4, 5, 6]

//Declarative
// const numbers1 = [1, 2, 3, 4, 5, 6];
// const filteredNumbers1 = numbers1.filter(value => {
//     return value > 3;
// });
// console.log(filteredNumbers1); //[4, 5, 6]

// const fn1 = (array, value) => {
//     for(let i = 0; i < array.length; i++) {
//         array[i] = array[i] * value;
//     }
// }

// const number = [1, 2, 3, 4, 5];

// fn1(number, 2);

// console.log(number);

// const pureFunc = (array, value) => {
//     const result = [];
//     for(let i = 0; i < array.length; i++) {
//         result.push(array[i] * value);
//     }
//     return result;
// }
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = pureFunc(numbers, 2);
// console.log(numbers); //[1, 2, 3, 4, 5]
// console.log(doubleNumbers); //[2, 4, 6, 8, 10]

//array.method((currentValue, index, array) => {

//    })

//forEach
// const numbers = [1, 2, 3, 4, 5];
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// numbers.forEach(num => console.log(num));
// numbers.forEach((num, index) => console.log(`index - ${index}, value - ${num}`));

//map - повертає колекцію
// const numbers = [1, 2, 3, 4, 5];
// const doubledNum = numbers.map(num => num * 2);
// console.log(doubledNum)

// const users = [
//     {name: 'Bob', isActive: true },
//     {name: 'Tom', isActive: false },
//     {name: 'Dilan', isActive: true },
// ];
// const names = users.map(user => user.name);
// console.log(names);

//filter - повертає колекцію
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(numbers.filter(num => num > 5));
// console.log(numbers.filter(num => num < 5));
// console.log(numbers.filter(num => num === 5));

// const users = [
//     {name: 'Bob', isActive: true },
//     {name: 'Tom', isActive: false },
//     {name: 'Dilan', isActive: true },
// ];
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

//find - повертається елемент (унікальний)
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.find(num => num > 5)); //6
// console.log(numbers.find(num => num < 5)); //1
// console.log(numbers.find(num => num === 5)); //5

// const users = [
//     {name: 'Bob', isActive: true, id: '01' },
//     {name: 'Tom', isActive: false, id: '02' },
//     {name: 'Dilan', isActive: true, id: '03' },
// ];
// const user = users.find(user => user.id === '02');
// console.log(user); //{name: 'Tom', isActive: false, id: '02'}

// const getUser = (array, id) => array.find(x => x.id === id);
// console.log(getUser(users, '02')); //{name: 'Tom', isActive: false, id: '02'}

//every() and some() - повертає буль
// const isBig = value => value >= 10;
// console.log([12, 9, 8, 45, 100].every(isBig));
// console.log([12, 9, 8, 45, 100].some(isBig));

// const num1 = [2, 8, 5, 1, 4];
// console.log(num1.some(isBig));

// const fruits = [
//   { name: "apples", amount: 50 },
//   { name: "kiwi", amount: 0 },
//   { name: "orange", amount: 100 },
// ];
// const allFruits = fruits.every(fruit => fruits.amount > 0);
// console.log(allFruits);

// const anyFruits = fruits.some(fruit => fruit.amount > 0);
// console.log(anyFruits);

//------------------------------------------

//1. Напишіть функцію, яка отримує масив чисел (створити самостійно) і  повертає новий масив, що містить лише парні числа.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doubledNumbers = function(array){
//     return array.filter(num => num % 2 === 0);
// }
// const evenNumber = doubledNumbers(array);
// console.log(evenNumber);

//Напишіть функцію, яка отримує масив об'єктів і повертає масив імен з тих об'єктів, які мають вік більше 18 років.

// const people = [
//   { name: 'John', age: 32, occupation: 'programmer' },
//   { name: 'Jane', age: 26, occupation: 'teacher' },
//   { name: 'Mike', age: 42, occupation: 'engineer' },
//   { name: 'Emily', age: 17, occupation: 'designer' }
// ];
// function getNames(arr) {
//     return arr
//     .filter(person => person.age > 18)
//     .map(person => person.name);
// }
// const adultNames = getNames(people);
// console.log(adultNames);

//Об'єднати два масиви в один без повторень.
// const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
// const array2 = [5, 12, 3, 14, 4, 5, 6, 6, 7];
// function merchArrays(arr1, arr2) {
//   const merch = [...arr1];
//   arr2.forEach((item) => {
//     if (!merch.includes(item)) {
//       merch.push(item);
//     }
//   });
//   return merch
// };
// const merch1 = merchArrays(array1, array2);
// console.log(merch1);
