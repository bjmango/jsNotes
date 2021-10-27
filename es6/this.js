// 👉 this keyword
// 🙈 💩 ES5
console.log(`ES5 ⬇️ 🙈 💩`);
const person = {
  name: 'Eric',
  walk() {
    console.log(this);
  },
};
person.walk(); // this keyword represents person object.

// const walk = person.walk;
// console.log(walk);
// walk(); // this returns global object (Window)

// ES5 fix: by using bind()
const walk = person.walk.bind(person)
walk()

console.log(`ES6 ⬇️ 🔥`);
// 🔥 ES6 NOTE: 
// 1. what does the 'this' keyword represent is determined how the method is called.
//      if a function is called as a method of an object, 'this' will always return a reference to that object. (the object left to the dot)
//      if a function is called as stand alone object or outside object, 'this' will return global object (Window). Sometimes, 'this' will return undefined when code is executed under restricted mode, like React app.
//        - since person.walk is an object and it's bind() method could fix the issue (const walk = person.walk.bind(person))
