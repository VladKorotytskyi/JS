// class Hero {
//     constructor({name, xp}) {
//         this.name = name
//         this.xp = xp
//     }
// }
// class Warrior extends Hero {
//     constructor({weapon}) {
//         super()
//         this.weapon = weapon
//     }
// }
// const mango = new Warrior({name: 'mango', xp: 1000, weapon: 'алебарда'})
// class Mage {
//     constructor({spells}) {
//         this.spells = spells
//     }
// }

// class Car {
//     static discription = 'Опис автомобіля'
//     #region = 5
//   constructor({ model, price, color }) {
//     this._model = model;
//     this.price = price;
//     this.color = color;
//   }
//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
//   getModel() {
//     console.log(this.model);
//     return;
//   }
// }

// get model() {
//     console.log(this._model);
// }

// set model(newModel) {
//     this._model = newModel
// }
// // геттери та сеттери
// car1.model
// car1.model = 'Audi Q6'