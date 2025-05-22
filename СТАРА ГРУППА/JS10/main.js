// const print = function(message) {
//     console.log(message);
// }

// const higherOrderFunction = function(callback) {
//     const string = 'Hello';
//     callback(string);
// }

// higherOrderFunction(print);

// for(let i = 0; i < 10; i += 1) {
//     console.log(i);
// }

// const repeat = function(n) {
//     for(let i = 0; i < n; i += 1) {
//         console.log(i);
//     }
// }
// repeat(5);
// repeat(50);

// const printValue = function(value) {
//     console.log(value);
// }
// const prettyPrint = function(value) {
//     console.log('Loggin value: ', value);
// }

// const repeat = function(n, action) {
//     for(let i = 0; i < n; i += 1) {
//         action(i);
//     }
// }
// const arr = [];

// repeat(5, value => {
//     arr.push(`Label ${value + 1}`);
// })
// console.log(arr);

// const filter = function(array, test) {
//     const filteredElements = [];
//     for(const element of array) {
//       const passed = test(element);
//       if(passed) {
//         filteredElements.push(element);
//       }
//     }
//     return filteredElements;
// }

// const fruits = [
//     {name: 'apples', quantity: 300, isFresh: true},
//     {name: 'oranges', quantity: 50, isFresh: true},
//     {name: 'kiwis', quantity: 150, isFresh: false}
// ]

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits);

// const fruitsQuantity = filter(fruits, fruit => fruit.quantity >= 100);
// console.log(fruitsQuantity);

// console.log(value); //error
// const value = 5;
// console.log(value); //5

// if(true) {
//     console.log(value); //error
//     const value = 10;
//     console.log(value); //10
// }
// console.log(value); //5

// const add = function(a, b, c) {
//     return a + b + c;
// }

// const add = (a, b, c) => a + b + c;

// const fn = x => x * 2;
// const fn2 = () => {
//     console.log('Hello');
// }
// console.log(fn2);

// const fn3 = (a, b, c) => {
//     return a + b + c;
// }


// const addArr = (...args) => {
//     console.log(args);
// }
// addArr(1, 2, 3, 4, 5); //[1, 2, 3, 4, 5]

//Напиши стрілкову функцію myNewArrowFunction(), яка приймає всі аргументи за допомогою ...rest
//і в результаті виводить масив цих аргументів у консоль.
//Для перевірки:

// const myNewArrowFunction = (...rest) => {
//     console.log(rest);
// }

// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");



//Створити стрілкову функцію hello1(), яка при визові буде вертати текст “Привіт JavaScript”.

// const hello1 = () => {
//     console.log('Привіт JavaScript');
// }
// hello1();



//Напишіть функцію, яка повертає новий масив, в якому всі елементи масиву помножені на задане число, з використанням колбек-функції

// const returnFn = function(arr, multipline, callback) {
//     const result = arr.map(el => el * multipline);
//     return callback(result);
// }
// const procesResult = function(newArray) {
//     return newArray;
// }
// const arr = [1, 2, 3, 4, 5];
// const multiplineArray = returnFn(arr, 3, procesResult);
// console.log(multiplineArray);