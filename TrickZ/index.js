/* Tip 4: You Don’t Need to Declare Every Variable with a Keyword
Did you know that if you have multiple variables next to each other, 
you can avoid using const, let, or var to declare every variable after the first one?

The only caveat is that if you're declaring variables without a keyword, you must 
separate them with a comma (,) instead of a semi-colon.*/

// declare multiple variables at once.
let x, y, z;

x = 1;
y = 2;
z = 3;

console.log(x, y, z); // 1, 2, 3

// declare other variables after the first one without the keyword.
const a = 'Hello',
  b = 'How are you today?',
  c = 'Are you coding today?';

console.log(a); // Hello
console.log(b); // How are you today?
console.log(c); // Are you coding today?