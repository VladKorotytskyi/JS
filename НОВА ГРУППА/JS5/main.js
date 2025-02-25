// // const names = ["Bob", "John"];
// // console.log(names);

// const student = {
//   name: "Tom",
//   age: 17,
//   course: "js",
// };

// const obj1 = Object.create(student);
// // console.log(obj1.name);

// const user = {
//     name: "Amy",
//     age: 15,
//   };

// const obj2 = Object.create(user);
// console.log('Amy`s age:', obj2.age,'Tom`s age:', obj1.age);

// let total = 0;
// const num1 = 5;
// const num2 = 10;

// function getSum(a, b) {
//     return a + b
// }
// getSum(num1, num2)

// const add = {
//     total: 0,
//     num1: 5,
//     num2: 10,
//     getSum() {
//         return this.total = this.num1 + this.num2
//     }
// }
// add.getSum()

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

// const wage = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//         return this.baseSalary + this.overtime * this.rate
//     }
// }
// wage.getWage()