// Использовать prompt, чтобы создать анкету персоны

let firstName,
    secondName,
    age,
    male;

firstName = prompt('What is your first name: ');
secondName = prompt('What is your last name: ');
age = prompt('How old are you: ');
male = prompt('What gender are you: ');

console.log(firstName + ' ' + secondName)
console.log(age + ' ' + 'years' + '\n' + male)