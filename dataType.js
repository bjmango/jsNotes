// NOTE: JS. there are 7 data type

// 1. Boolean - true or false
var data = false;
if (data) {
  console.log('Boolean rule!');
} else {
  console.log('Booleans are lame.');
}

// 2. null - an assignment value, means no value.  
// When doing math with something equals to null, it gonna be same as 0.
var n = null;
console.log(n * 32); // 0

// 3. undefined - kind of similar to null, but different. undefined is 
//    - a variable has not been declared.
// or - a variable has been declared, but it has not yet been assigned a value
var a;
console.log(a); // undefined
console.log(a + 2); // NaN

// 4. Number  
const num1 = 4.6;
const num2 = 5.4;
console.log(num1 + num2);

// 5. String
var name = 'Eric';
console.log('Hi, My name is ' + name);

// 6. Symbol
var sym1 = Symbol('foo');
var sym2 = Symbol('foo');
console.log(sym1 === sym2);
console.log(String(sym1) === String(sym2));
console.log(String(sym1));

// 7. Object - a collection of properties, and property is a association between a key and value
var myCar = new Object();
myCar.make= "Ford"
myCar.model="Mustang"
console.log(myCar.make)
// document.querySelector('#app').innerHTML = ``;

