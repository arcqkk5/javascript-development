//string operations
let result = 'Grigoriy'
const firstName = 'Grisha'
const lastName = 'Lafutkin'
const space = ' '
const age = 20
const greeting = "Hey there!"


//concatanation
result = 'Grigoriy' + 'Lafutkin'
result = 'Grigoriy' + ' ' + 'Lafutkin'
result = firstName + space + lastName
result = greeting + space + 'My name is' + space + firstName + space
+ lastName + '. ' + age + "years old."

//Escpaping
result = 'I\'m 34 years old'
result = "I'm like \"Star wars!\""

//properties and method
result = 'Hello!'.length // 6
result = firstName.length // 6

//concat
result = firstName.concat(lastName) // GrishaLafutkin
result = firstName.concat(space, lastName) // Grisha Lafutkin
result = greeting.concat(space, 'My name is', space, firstName, space, lastName, '.')

//case
result = result.toUpperCase();
result = result.toLowerCase();

result = result[0]; // H

//IndexOf
result = 'Hello'.indexOf('o'); // 4
result = 'Hello'.indexOf('l'); // 2
result = 'Hello'.lastIndexOf('l'); //3
result = 'Hello'.indexOf('lo'); // 3
result = 'Hello'.indexOf('z'); // -1

//charAt
result = firstName.charAt(0); // G
const longStr = 'Hi, i\'m a long string!'
result = longStr.charAt(longStr.length - 1); // !

//substring()

result = greeting.substring(2, 6) // 'y th'
result = greeting.substring(0, 4) // Hey

//slice()
result = greeting.slice(0, 4) // Hey
result = greeting.slice(-3) // Последние 3 символа

// split()
result = longStr.split(' ') // ['Hi', ',', ' ', 'i'm', ... ]

//replace()
result = firstName.replace('Grish', 'GrIsH') // GrIsHa

//includes()
result = firstName.includes('Gr') // true

console.log(result)