'use strict';

function getAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const info = `${firstName} is ${age}, born in ${birthYear}.`;
    console.log(info);
  }

  printAge();

  return age;
}

const firstName = 'Grigoriy';
getAge(2000);

//this
console.log(this);
