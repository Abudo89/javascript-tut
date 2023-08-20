/*Use the Spread Operator to Copy and Merge Arrays
You can use the spread operator in various scenarios, 
such as copying arrays, merging arrays, cloning objects, and passing multiple arguments to functions.*/

//Here's how to use it to copy and merge arrays:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]

// merge two or more arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6