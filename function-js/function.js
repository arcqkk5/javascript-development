//Function javascript

// function myFunction() {
//   console.log('Hello to everyone!')
// }

// myFunction(); // Hello to everyone!


const num = 500;
function printNumber (x) {
  console.log(x);
  const 
}
printNumber(num);

//declaration and expression function
function getAge(birthYear, yearNow) {
  return yearNow - birthYear;
}

const myAge = getAge(2000, 2021);
console.log(myAge); //21

const getAge2 = function(birthYear, yearNow) {
  return yearNow - birthYear;
}

const myAge2 = getAge2(2000, 2021);
console.log(myAge2); // 21

//Arrow function
const getAge3 = (birthYear, yearNow) => yearNow - birthYear;

const myAge3 = getAge3(2000, 2021);
console.log(myAge3);


const canBuyAlcohol = (birthYear, yearNow) => {
  const age = yearNow - birthYear;
  const isPerson = age > 21 ? true : false
  return isPerson;
}





