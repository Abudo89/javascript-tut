/* You can capitalize the first letter of any word by combining the chartAt(), toUpperCase(), and slice() methods.

With chartAt(0), you can get the first letter of the word and use the toUpperCase() method with it, 
then concatenate the rest of the letters with slice(1).*/
//Capitalize the First Letter of Any Word
const str = 'john';
const capitalizedStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalizedStr(str)); // John
console.log(capitalizedStr('doe')); // Doe