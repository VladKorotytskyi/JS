// const hotel = {
//     name:'Hilton',
//     stars: 5,
//     capacity: 250,
// }

// console.log(hotel.name);
// console.log(hotel.stars);
// console.log(hotel.capacity);

// console.log(hotel['capacity']); 
// hotel.name = 'Hilton Resort';
// console.log(hotel.name);

// hotel.pool = true;
// console.log(hotel.pool);

// console.log(hotel);
// console.log(hotel.address);

// delete hotel.stars;
// console.log(hotel);
// delete hotel['stars'];

// let nameHotel = 'Hilton';
// let starsHotel = 5;

// //ES5
// const hotelFive = {
//     name: nameHotel,
//     stars: starsHotel,
//     capacity: 250,
// }
// console.log(hotelFive); //{name: 'Hilton', stars: 5, capacity: 250}

// //ES6
// const hotelSix = {
//     nameHotel,
//     starsHotel,
//     capacity: 250,
// }
// console.log(hotelSix); //{nameHotel: 'Hilton', starsHotel: 5, capacity: 250}

// // const key = 'person';
// // const object = {};
// // object[key] = 'Bob';
// // console.log(object); //{person: 'Bob'}

// const key = 'person';
// const getKey = function() {
//     return 'age';
// }

// const object = {
//     [key]: 'Bob',
//     [getKey()]: 20,
// }


// const hotel = {
//     name:'Hilton',
//     stars: 5,
//     capacity: 250,
    //5
    // sendMessage: function() {
    //     console.log('Welcome')
    // },

    // //6
    // sendMessage6() {
    //     console.log('Welcome')
    // }
//}
// console.log(hotel);

// hotel.sendMessage = function() {
//     console.log('Welcome')
// }

// hotel.sendMessage();

// const hotel = {
//     name:'Hilton',
//     stars: 5,
//     capacity: 250,
//     showName() {
//         console.log(this.name)
//     },
//     changeCapacity(value) {
//         this.capacity = value;
//     }
// }

// hotel.showName(); //Hilton
// hotel.changeCapacity(150); 
// console.log(hotel.capacity); //150


//-----------------------------------


//Створіть об'єкт "person" з властивостями "name", "age", "gender". 
//Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.

// const person = {
//     name: 'Vlad',
//     age: 13,
//     gender: 'male',
//     describe() {
//         console.log(`Name: ${this.name}, age: ${this.age} and gender: ${this.gender}.`);
//     }
// }
// console.log(person.describe());

//Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". 
//Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи

// const students = [{
//     name: 'Tom',
//     age: 17,
//     gender: 'male',
//     grade: 10,
// }, {
//     name: 'Anna',
//     age: 20,
//     gender: 'famale',
//     grade: 7,
// }]

// const count = function(students) {
//     let count = 0;
//     let total = 0;
//     for(let i = 0; i < students.length; i++) {
//         total += students[i].grade;
//         count++;
//     }
//     return count === 0 ? 0 : total / count;
// }
// const average = count(students);
// console.log(`Середній балл студентів: ${average}`);

//Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". 
//Додайте до об'єкту метод, який дозволить змінювати значення властивостей.

const book = {
    title:'Harry Potter',
    author:'Joanne Rowling',
    year: 1997,
    genre: 'Fantasy',
    update(newTitle, newAuthor, newYear, newGenre) {
        if(newTitle) this.title = newTitle;
        if(newAuthor) this.author = newAuthor;
        if(newYear) this.year = newYear;
        if(newGenre) this.genre = newGenre;
    }
}
console.log(book);
book.update(
    'Kings of the night',
    'John Madas',
    2007,
    'Literature',
)
console.log(book);