// Global Scope

// Variables declared with the var always have Global Scope.

// Variables declared with the var keyword can NOT have block scope:

// Variables declared with varinside a { } block can be accessed from outside the block:
{
  var x = 2;
}

console.log(x); // x Can be used here!