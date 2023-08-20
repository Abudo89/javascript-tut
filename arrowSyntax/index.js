/*Use Arrow Syntax to Write Shorter and More Elegant Functions
Arrow functions provide a shorter syntax compared to traditional 
function expressions and have some unique features. Understanding 
arrow functions is essential for modern JavaScript development.*/

// Traditional Function Expression
function add1(a, b) {
    return a + b;
  }
  
  // Arrow Function
  const add2 = (a, b) => a + b;
  
  console.log(add1(1, 2)); // 3
  console.log(add2(5, 8)); // 13
  
  // Using Traditional Function Expression
  const numbers1 = [3, 4];
  const numbers2 = [2, 8];
  
  const squared1 = numbers1.map(function (num) {
    return num * num;
  });
  
  // Using Arrow Function
  const squared2 = numbers2.map((num) => num * num);
  
  console.log(squared1); // [ 9, 16 ]
  console.log(squared2); // [ 4, 64 ]