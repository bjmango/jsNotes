// 👉 Let vs Var vs Const
console.log(`ES5 ⬇️ 🙈`);
// 🙈 ES5
var global = 'global';
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // var variable i is not been blocked off from for code block
  console.log(global);
}
console.log(global);
sayHello();
// console.log(i) // ReferenceError. var i is NOT accessible outside of the function where it is declared.

console.log(`ES6 ⬇️ 🔥`);
// 🔥 ES6 NOTE:
// 1. var -> function scoped
    // when a variable is defined on top of a js file using var keyword, it is accessible inside entire js file
    // when a variable is defined using var keyword, it is accessible inside the function where the variable is defined. It is NOT blocked off from the code block {} where it is declared.
// 2. let -> block scoped
// 3. const -> block scoped
function sayHi() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i)  // ReferenceError. let i is NOT accessible outside of the block {} where it is declared
}
sayHi();

const x = 2;
// x = 1; // TypeError. Assignment to a constant variable
