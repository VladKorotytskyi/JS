// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// }

// for(const key in hotel) {
//     console.log('Key: ', key);
// }
// //Key:  name
// //Key:  stars
// //Key:  capacity

// for(const key in hotel) {
//     console.log('Value: ', hotel[key]);
// }
//Value:  Hilton
//Value:  5
//Value:  250

// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// }
// const keys = Object.keys(hotel);
// console.log(keys); //['name', 'stars', 'capacity']

// const values = Object.values(hotel);
// console.log(values); //['Hilton', 5, 250]

// const entries = Object.entries(hotel);
// console.log(entries); //[['name', 'Hilton'], ['stars', 5], ['capacity', 250]]

// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// }

// const keys = Object.keys(hotel);
// for(const key of keys) {
//     console.log('Value: ', hotel[key])
// }

// const entries = Object.entries(hotel);
// for(const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
// }



// const goods = {
//     apples: 10,
//     kiwi: 5,
//     mango: 6,
//     lime: 2,
// }
// const values = Object.values(goods);

// let total = 0;
// for(const value of values) {
//     total += value;
// }
// console.log(total);

// const temp = [20, 24, 32, 18, 29, 20, 21, 24, 28, 30, 12];
// const min = Math.min(temp);
// console.log(min); //NaN

// const min1 = Math.min(...temp);
// console.log(min1); //12

// const min2 = Math.min(20, 24, 32, 18, 29, 20, 21, 24, 28, 30, 12);


// const names = ['Alex', 'Sam', 'Bob', 'Nick'];
// console.log(names);
// const copyNames = [...names];
// console.log(copyNames);

// console.log(names === copyNames);

// const slicedNames = names.slice();
// console.log(slicedNames);



// const names = ['Alex', 'Sam', 'Bob', 'Nick', 'Nicka', 'Poll'];
// const complatedNames = [...names, 'John'];
// console.log(complatedNames);


// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const arr = [...array1, ...array2];
// console.log(arr);

// const names = ['Alex', 'Sam', 'Bob', 'Nick', 'Nicka', 'Poll'];
// const copy = [...names.slice(0, 4), ...names.slice(5)];
// console.log(copy);

// const copy1 = [...names.slice(0, 1), 'John', ...names.slice(2)];
// console.log(copy1);




// const a = { x: 1, y: 2 };
// const b = { x: 0, n: 3 };
// const c = Object.assign({}, a, b);
// console.log(c);

// const d = { ...a, ...b };
// console.log(d);



// const a = { x: 1, y: 2 };
// const b = { x: 0, n: 3 };
// const c = { m: 4, ...a, l: 6, ...b };
// console.log(c);


// let a = 5;
// let b = a;
// console.log(a); //5
// console.log(b); //5

// a = 10;
// console.log(a); //10
// console.log(b); //5


// const a = ['Bob'];
// const b = a;
// console.log(a);
// console.log(b);

// a.push('Poly');
// console.log(a);
// console.log(b);

// b.push('Alex');
// console.log(a);
// console.log(b);

//Створіть об'єкт "user" з властивостями "name", "age", "email" та методом "login", 
//який буде виводити повідомлення на екран з привітанням користувача та його даними. 
// Для виклику методу "login" використовуйте функцію зворотнього виклику (callback).

// const user = {
//     name: 'Bob',
//     age: 22,
//     email: '123bob123@gmail.com',
//     login(callback) {
//         callback(this.name, this.age, this.email);
//     }
// }
// const display = (name, age, email) => {
//     alert(`Ім'я: ${name}, рік: ${age}, email: ${email}`);
// }
// user.login(display);