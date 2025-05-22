// // // // const baseSalary = 10000;
// // // // const overtime = 10;
// // // // const rate = 10;

// // // // const getWage = (baseSalary, overtime, rate) => {
// // // //     return baseSalary + overtime * rate;
// // // // };
// // // // getWage(baseSalary, overtime, rate);

// // // // //OOП

// // // // const employee = {
// // // //     baseSalary: 10000,
// // // //     overtime: 10,
// // // //     rate: 10,
// // // //     getWage() {
// // // //         return this.baseSalary + this.overtime * this.rate;
// // // //     }
// // // // }

// // // // employee.getWage()

// // // // const animal = {
// // // //     legs: 4,
// // // // }
// // // // const dog = Object.create(animal);
// // // // console.log(dog);
// // // // dog.name = 'Jack';
// // // // console.log(dog);

// // // // console.log(animal.isPrototypeOf(dog));

// // // // const animal = {
// // // //     eats: true,
// // // // }

// // // // const cat = Object.create(animal);
// // // // cat.meow = true;

// // // // for(const key in cat) {
// // // //     if(!cat.hasOwnProperty(key)) continue;
// // // //     console.log(key) //meow, eats
// // // // }

// // // const animal = {
// // //     eats: true,
// // // };

// // // const dog = Object.create(animal);
// // // dog.barks = true;
// // // const dogKeys = Object.keys(dog);
// // // console.log(dogKeys);

// // // class User {
// // //   constructor({ name, email }) {
// // //     this.name = name;
// // //     this.email = email;
// // //   }
// // // }

// // // const bob = new User("Bob", "bob123@gmail.com");
// // // console.log(bob); //{}

// // // const tom = new User("Tom", "tom321@gmail.com");
// // // console.log(tom);

// // // const tom = new User({
// // //   name: "Tom",
// // //   email: "tom321@gmail.com",
// // // });
// // // console.log(tom);

// // class User {
// //   name;
// //   #email;
// //   constructor({ name, email }) {
// //     this.name = name;
// //     this.#email = email;
// //   }

// //   get email() {
// //     return this.#email;
// //   }

// //   set email(newEmail) {
// //     if(newEmail === '') {
// //         console.log('error')
// //     }
// //     this.#email = newEmail
// //   }
// // }

// // const bob = new User({
// //   name: "Bob",
// //   email: "bob123@gmail.com",
// // });
// // console.log(bob.email);
// // bob.email = "newBob@ukr.net";
// // console.log(bob.email);

// class User {
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   name;
//   #email;
//   #role;
//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mark = new User({
//   email: "mark@ukr.net",
//   role: User.Roles.ADMIN,
// });
// console.log(mark.Roles);
// console.log(User.Roles);
// console.log(mark.role);
// mark.role = User.Roles.EDITOR;
// console.log(mark.role);

// class User{
//     #email;
//     constructor(email) {
//         this.#email = email; 
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }
// class ContentEditor extends User{
//     constructor({email, posts}) {
//         super(email);
//         this.posts = posts;
//     }
//     addPost(post) {
//         this.posts.push(post);
//     }
// }
// const editor = new ContentEditor({email: 'bob@ukr.net', posts: []});
// console.log(editor);
// editor.log(editor);
// console.log(editor.posts);