//Виведіть в консоль через кому рядок “Я навчаюся в GoITeens в групі: ”
//і змінну group в якої значення це назва твоєї групи.

// const group = 'FE_1y_30_31_10_23';
// console.log(`Я навчаюся в GoITeens в групі: ${group}`);

//За допомогою prompt запитайте ім’я користувача. Отримане значення виведіть в консоль.

// const name = prompt('Як в вас ім`я?');
// console.log(name);

//Оголоси дві змінні, які зберігають назву та ціну товару: name і price. Присвойте змінним наступні характеристики товару (відразу при оголошенні) назва: MacBook Pro 13″, ціна: 100000
//Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «MacBook Pro 13″», ціна за штуку 10000 кредитів'. Присвой товару нову ціну - 20000. Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «MacBook Pro 13″», ціна за штуку 2000 кредитів'.

// const name = 'MacBook Pro 13';
// let price = 100000;
// console.log('Обрано', name, ', ціна за штуку', price / 10, 'кредитів');
// price = 20000;
// console.log('Обрано', name, ', ціна за штуку', price / 10, 'кредитів');

//Напишіть скрипт, який знаходить площу прямокутника. 
//Висота 23см, шириною 10см - всі данні повинні зберігатися в змінних.  
//Значення площі повинно зберігається в числовій змінній.

// const height = 23;
// const width = 10;
// const total = width * height;
// console.log(total);

//У прямокутного трикутника дві сторони зі значенням 3 і 4. 
//Знайдіть гіпотенузу k по теоремі Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор піднесення до степеня **).
//Результат та дані повинні зберігатися в змінних.

// const a = 3;
// const b = 4;
// const k = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log(k);

//У змінну random згенеруйте випадкове число від 3 до 19 включно. Результат виведіть в консоль

// console.log(Math.floor(Math.random() * (19 - 3 + 1)) + 3);

//Напишіть скрипт, який просить відвідувача ввести два числа, і в результаті показує їх суму.

// const num1 = parseFloat(prompt('Напишіть перше число'));
// const num2 = parseFloat(prompt('Напишіть друге число'));
// let result = num1 + num2;
// alert(`Ваш результат: ${result}`);

//Напиши скрипт який виведе рядок в форматі: “Гість x y поселяється в n номер g”, підставивши замість x, y, n, g значення змінних.

// const x = 'Vladyslav';
// const y = 'Korotytskyi';
// const n = 9;
// const g = 'Merkury Hotel';
// alert(`Гість ${x} ${y} поселяється в ${n} номер в ${g}`);

//Створи програму яка буде обрізати повідомлення від лишніх пропусків з обох сторін.

// const message = prompt('enter anything');
// const trueMessage = message.trim();
// console.log(trueMessage);

//Порахувати загальну суму покупок в корзині

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for(const price of cart) {
//     total += price
// }
// console.log(total);

//Напиши скрипт пошуку самого маленького числа в масиві,  при умові, що числа унікальні (не повторюються).
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// for(const number of numbers) {
//     if(number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);

//Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// for(const number of array1) {
//     total += number;
// }
// for(const number of array2) {
//     total += number;
// }
// console.log(`Результат: ${total}`);