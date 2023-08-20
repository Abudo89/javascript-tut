//Tip 8: Methods of the Math Object
//Here are several methods of the Math object and what they do:
let x;

// Get the square root of a number
x = Math.sqrt(9);

// convert a number to absolute value
x = Math.abs(-5); // 5

// Round up a number to the nearest whole number
x = Math.round(4.6);

// Round up a number
x = Math.ceil(4.2); // 5

// Round down a number
x = Math.floor(4.9); // 4

// Exponent of a number
x = Math.pow(2, 3); // 8

// Get the minimum number
x = Math.min(4, 5, 3); // 3

// Get the maximum number
x = Math.max(4, 5, 3); // 5

// Get a random number/decimal between 0 and 1
x = Math.random();

// Get a random number between 1 and 200
x = Math.floor(Math.random() * 200 + 1); // any number between and 200

console.log(x);

/* For example, Math.floor(Math.random() * 100 + 1) would generate a random number between 100 and 1,
 after it follows these processes:
Math.random() generates a random floating point number between 0 and 1 – 0 inclusive but 1 exclusive
With Math.random() * 100, the random number is now between 0 and 99 but still has long floating points
Math.floor(Math.random() * 100) rounds the floating point number to the nearest integer between 0 and 99
Math.floor(Math.random() * 100 + 1) adds 1 to the result and shifts the range to 1 - 100.*/