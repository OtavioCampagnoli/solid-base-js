/*
Block Scope

Before ES6 (2015), JavaScript did not have Block Scope.

JavaScript had Global Scope and Function Scope.

ES6 introduced the two new JavaScript keywords: let and const.

These two keywords provided Block Scope in JavaScript:
*/

{
  let x = 2;
  console.log(x);
}

// console.log(x); x can NOT be used here;

{
  let x = 3;
  console.log(x);
}