/* Tip5: Use console.group() with Multiple console.log()s to Group Related Items to the Console
When you have multiple related items like username, bio, and so on and you 
want to log them to the console, you should use console.group() and console.groupEnd() to close the group.*/
console.group('Bio:');

console.log('My name is Abudo');
console.warn("I don't like to be late");
console.error('You came late');

console.groupEnd();