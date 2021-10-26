// 👉 Object
// 🙈 ES5
console.log(`ES5 ⬇️ 🙈`);
var person = {
  name: 'Eric',
  walk: function () {
    console.log('walk');
  },
  talk: function () {
    console.log('talk');
  },
};

console.log(person.name)
person.walk()
person.talk()

console.log(`ES6 ⬇️ 🔥`);
// 🔥 ES6 NOTE:
// 1. function keyword is not mandatory when declaring a function in object
// 2. use bracket notation when we don't know ahead of time what property we are going to access
const newPerson = {
  name: 'Eric',
  walk() {
    console.log('walk');
  },
  talk() {
    console.log('talk');
  },
};

console.log(newPerson.name)
newPerson['name'] = 'John'
const targetMember = ['name'];  // assume receiving the value from user input
newPerson[targetMember] = 'John'
newPerson.walk()
newPerson.talk()
