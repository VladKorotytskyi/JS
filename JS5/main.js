// let cost;
// const sub = "pro";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 200;
//     break;

//   case "premium":
//     cost = 400;
//     break;

//   default:
//     console.log("Такого вида не існує");
// }

// console.log(cost);

// const value = 10;
// console.log(value); //10

// if (true) {
//     console.log(value); //10
// }

// if (true) {
//     const value = 5;
//     console.log(value); //5
// }

// console.log(value); //ReferenceError: value is not defined

// if(browser == 'Edge') {
//     p.textContent = "You've got the Edge!";
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     p.textContent = 'Ми підтримуємо і ці браузери' ;
//   } else {
//     p.textContent =  'Маємо надію, що ця сторінка виглядає добре!' ;
//   }
// const browser = 'Google';

// switch (browser) {
//     case 'Edge':
//          console.log("You've got the Edge!");
//         break;
//     case 'Chrome':
//         case 'Firefox':
//             case 'Safari':
//                 case 'Opera':
//                      console.log('Ми підтримуємо і ці браузери');
//                      break;
//     default:
//         console.log('Маємо надію, що ця сторінка виглядає добре!');
// }

// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років. Назву групи вивести на екран.

// switch (true) {
//     case (age >= 0 && age <= 16):
//         group = 'Діти';
//         break;
//     case (age >= 17 && age <= 60):
//         group = 'Дорослі';
//         break;
//     case (age >= 61 && age <= 100):
//         group = 'Пенсіонери';
//         break;
//     default:
//         group = 'Невизначена';
// }
// console.log(group);

// let age = 55;
// let group;

// if(age >= 0 && age <= 16) {
//     group = 'Діти';
// } else if (age >= 17 && age <= 60) {
//     group = 'Дорослі';
// } else if (age >= 61 && age <= 100) {
//     group = 'Пенсіонери';
// } else {
//     group = 'Невизначена';
// }
// alert(group);

// let age = 12;
// let group;
// switch (true) {
//   case (age <= 17):
//     group = "Не повнолітній";
//     break;
//   default:
//     group = "Повнолітній";
// }
// console.log(group);

// let lang = 'eng';
// let month;
// switch(lang) {
//     case 'ua':
//         month = 'Січень';
//         break;
//         case 'fr':
//             month = 'Janvier';
//             break;
//             case 'eng':
//                 month = 'January';
//                 break;
//     default:
//         month = 'Мова не знайдена';
// }
// console.log(month);



// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число,яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “УПС”. Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

const nameOne = 'Vladyslav';
const lastName = 'Korotytakyi';
const nameLength = nameOne.length;
const lastNameLength = lastName.length;
let result;

switch(true) {
    case (nameOne.length >= 4 && lastName.length >= 5):
        result = nameLength + lastNameLength;
        break;
    default:
        result = 'УПС';
}
console.log(result);