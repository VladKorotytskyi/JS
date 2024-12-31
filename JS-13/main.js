// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// };

// const {name, stars, status} = hotel;
// console.log(name, stars, status); //Hilton 5 undefined

// const {name: hotelName, stars: hotelStars, status: hotelStatus = 'empty'} = hotel;
// console.log(hotelName, hotelStars, hotelStatus); //Hilton 5 empty

// const {name, ...rest} = hotel;
// console.log(name); //Hilton
// console.log(rest); //{stars: 5, capacity: 250}

// let options = {
//     size: {
//         width: 100,
//         height: 200,
//     },
//     items: [ 'Cake', 'Donut' ],
//     extra: true,
// };

// const { size: {width, height}, items: [item1, item2] } = options;
// console.log(width); //100
// console.log(height); //200
// console.log(item1); //Cake
// console.log(item2); //Donut

// const rgb = [200, 255, 100];
// let red, green, blue;
// [red, green, blue] = rgb;
// const [red, green, blue, alfa = 0.3] = rgb;
// console.log(`Red: ${red}, green: ${green}, blue: ${blue}, alfa: ${alfa}`); //Red: 200, green: 255, blue: 100, alfa: 0.3

// const [red, ...colors] = rgb;
// console.log(`Red: ${red}, colors: ${colors}`); //Red: 200, colors: [255,100]

// const [, , blue] = rgb;
// console.log(`Blue ${blue}`);

// let arr = ['Bob', 'Nick'];
// let [firstName, secondName] = arr;
// console.log(firstName);
// console.log(secondName);

// let firstName = arr[0];
// console.log(firstName); //Bob

//---------------------------

//Деструктуризувати наступні об’єкти
//Об’єкт user
// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// }
// const {name, age, email} = user;
// console.log(name);
// console.log(age);
// console.log(email);

// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//       airbags: true,
//       antilock_brakes: true,
//       stability_control: true
//     }
//   }

//   const {make, model, year, features: [features1, features2, features3], safety: {airbags, antilock_brakes, stability_control}} = car;
//   console.log(make);
//   console.log(model);
//   console.log(year);
//   console.log(features1);
//   console.log(features2);
//   console.log(features3);
//   console.log(airbags);
//   console.log(antilock_brakes);
//   console.log(stability_control);

//Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та використовує деструктуризацію для повернення рядка,
// що містить інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".
// const person = {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25
//   };
//  const personInfo = function({name, surname, age}) {
//     return `Мене звати ${name}, Прізвище ${surname}, і мені ${age} років`;
//  }
//   console.log(personInfo(person));

//Напишіть функцію, яка приймає об'єкт, що містить інформацію про студента
// //(ім'я, прізвище, оцінки за три предмети)
// та використовує деструктуризацію для повернення середньої оцінки студента.
// const student = {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
//   };
//  const calculateAverageGrade = function({grades}) {
//     let total = 0;
//     for(let i = 0; i < grades.length; i++) {
//         total += grades[i];
//     }
//     return total / grades.length;
//  }
//   console.log(calculateAverageGrade(student));

//Напишіть функцію, яка отримує масив об'єктів з інформацією про товари (назва, ціна, кількість)
//  та використовує деструктуризацію для обчислення загальної вартості товарів.
// const items = [
//     { name: 'Футболка', price: 250, quantity: 2 },
//     { name: 'Джинси', price: 800, quantity: 1 },
//     { name: 'Кросівки', price: 1200, quantity: 1 }
//   ];
//  const calculateTotalCost = function(items) {
//     let total = 0;
//     for(const {price, quantity} of items) {
//         total += price * quantity;
//     }
//     return total;
//  }
//   console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500

//Напишіть функцію, яка отримує об'єкт зі списком електронних адрес (поле "emails")
// та використовує деструктуризацію для повернення першої адреси в цьому списку.
// const person = {
//     name: 'John',
//     emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
//   };
//  const getFirstEmail = function({emails}) {
//     const [email1] = emails;
//     return email1;
//  }
//   console.log(getFirstEmail(person));

//Напишіть функцію, яка отримує об'єкт зі списком користувачів (поле "users"),
//де кожен користувач є об'єктом з полями "ім'я" та "вік",
//та використовує деструктуризацію для повернення списку користувачів, які старші за 18 років.
// const data = {
//     users: [
//       { name: 'John', age: 25 },
//       { name: 'Jane', age: 17 },
//       { name: 'Bob', age: 30 },
//       { name: 'Alice', age: 20 }
//     ]
//   };
//   const getAdultUsers = function({users}) {
//     return users.filter(({age}) => age > 18);
//   }
//   console.log(getAdultUsers(data)); // [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }, { name:

//Провести глибоку деструктуризацію об’єкту

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};

//------------------------------------------------

const {
  count,
  artists: [
    {
      name: firstName,
      albums: [
        {
          title: firstTitle,
          year: firstYear,
          tracks: [
            { title: firstTrackTitle, duration: firstTrackDuration },
            { title: secondTrackTitle, duration: secondTrackDuration },
            { title: thirdTrackTitle, duration: thirdTrackDuration },
          ],
        },
        {
          title: secondTitle,
          year: secondYear,
          tracks: [
            { title: firstTrackTitle2, duration: firstTrackDuration2 },
            { title: secondTrackTitle2, duration: secondTrackDuration2 },
            { title: thirdTrackTitle2, duration: thirdTrackDuration2 },
          ],
        },
      ],
    },
    {
      name: secondNameName,
      albums: [
        {
          title: thirdtTitle3,
          year: thirdYear3,
          tracks: [
            { title: firstTrackTitle3, duration: firstTrackDuration3 },
            { title: secondTrackTitle3, duration: secondTrackDuration3 },
            { title: thirdTrackTitle3, duration: thirdTrackDuration3 },
          ],
        },
        {
          title: secondTitle3,
          year: secondYear3,
          tracks: [
            { title: firstTrackTitle4, duration: firstTrackDuration4 },
            { title: secondTrackTitle4, duration: secondTrackDuration4 },
            { title: thirdTrackTitle4, duration: thirdTrackDuration4 },
          ],
        },
      ],
    },
  ],
} = musicLibrary;
console.log(firstTrackDuration);
console.log(secondTitle3);
