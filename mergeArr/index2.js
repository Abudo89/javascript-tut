//And below is how you can use it to pass multiple arguments into any function:

function addNumbers(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [10, 12, 8];
  const sum = addNumbers(...numbers);
  
  console.log(sum); // 30