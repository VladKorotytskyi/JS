'use strict'

// const message = 'I love JavaScript!';
// console.log(message.split('')); //['I', ' ', 'l', 'o', 'v', 'e', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', '!']
// console.log(message.split(' ')); //['I', 'love', 'JavaScript!']

// const users = ['Bob', 'Nick', 'John'];
// console.log(users.join(' ')); //Bob Nick John
// console.log(users.join('-')); //Bob-Nick-John

// const clients = ['Bob', 'Nick', 'John'];
// console.log(clients.indexOf('John')); //2
// console.log(clients.indexOf('Joy')); //-1

// console.log(clients.includes('Bob')); //true

// const fruit = 'apple';
// if (fruit === 'apple' || fruit === 'kiwi') {
//     console.log('Це зелений фрукт');
// }

// const greenFruits = ['apple', 'kiwi', 'lime', 'pear'];
// const gFruit = 'kiwi';
// if(greenFruits.includes(gFruit)) {
//     console.log('Це зелений фрукт');
// }

// const classes = ['Vasya', 'Valerii', 'Vlad'];
// console.log(classes.includes('Vasya'));





// const numbers = [];
// numbers.push(2);
// console.log(numbers);
// numbers.push(5);
// console.log(numbers);
// numbers.push(8);
// console.log(numbers);
// numbers.push('hello');
// console.log(numbers);

// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// const clients = ['Bob', 'Nick', 'John'];
// console.log(clients.shift());
// console.log(clients.shift());
// console.log(clients);

// clients.unshift('Tom');
// console.log(clients);
// clients.unshift('Anna');
// console.log(clients);


// const clients = ['Bob', 'Nick', 'John', 'Tom', 'Poly'];
// console.log(clients.slice(1, 3));
// console.log(clients.slice(1)); 
// console.log(clients.slice()); 
// console.log(clients.slice(-2));


// const numbers = [1, 2, 3, 4, 5];
// const deletedNumbers = numbers.splice(0, 3);
// console.log(numbers);
// console.log(deletedNumbers);

// const colors = ['blue', 'green', 'red'];
// colors.splice(2, 0, 'purple');
// console.log(colors);
// colors.splice(1, 0, 'yellow', 'orange');
// console.log(colors);

// const names = ['Tom', 'Nick', 'Dina', 'Bob', 'Anna'];
// names.splice(1, 1, 'John', 'Poly', 'Mary');
// console.log(names);
// names.splice(0, 3, 'Alex');
// console.log(names);


// const arr1 = ['Bob', 'Tom', 'John'];
// const arr2 = ['Poly', 'Anna'];
// const allArr = arr1.concat(arr2);
// console.log(allArr);
// console.log(arr1);
// console.log(arr2);



//Створити масив із п'яти чисел. Використовуючи метод push(), додати до масиву ще один елемент.

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers);

//Створити масив із трьох стрічок. Використовуючи метод pop(), видалити з масиву останній елемент.

// const string = ['Hello', 'Hi', 'Bye'];
// string.pop();
// console.log(string);

//Напиши скрипт який рахує суму елементів двух масивів.

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const allArray = array1.concat(array2);
// let num = 0;
// for(let i = 0; i < allArray.length; i++) {
//     num += allArray[i];
// }
// console.log(num);

//Створити масив гравців. додати до кожного гравця -N, де n - це порядковий номер.
//Наприклад, “Poly” => “Poly-1”

// const players = ['Tom', 'Nick', 'Dina', 'Bob', 'Anna'];
// const masiv = [];
// for(let i = 0; i < players.length; i++) {
//     masiv.push(`${players[i]}-${i+1}`)
// }
// console.log(masiv);
