/*Object destructuring is a powerful feature in JavaScript. It allows you to extract properties from objects 
and assign them to variables in a more concise and readable way compared to the traditional dot notation way.*/

//Here's how to extract properties with destructuring:

const person = {
    name: 'John Doe',
    age: 30,
    gender: 'male',
  };
  
  // Traditional way
  const name2 = person.name;
  const age2 = person.age;
  const gender2 = person.gender;
  
  console.log(name, age, gender); // John Doe 30 male
  
  // with destructuring
  const { name, age, gender } = person;
  
  console.log(name, age, gender);
  // John Doe 30 male