# JS Practice
A code repo for JavaScript Practice - MDSAK


IIFE (Immediately Invoked Function Expression)
1. An IIFE is a JavaScript function that runs as soon as it is defined.
2. Avoid polluting the global namespace.

Nullish Coalescing Operator (??): null undefined
1. The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
2. const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0