'use strict';

// array1 [49, 51, 63]
// array2 [29, 34, 60, 38, 45]

//Решение прогноз погоды
const arrOne = [49, 51, 63];
const arrTwo = [29, 34, 60, 38, 45];
const printHumidities = function (array) {
  let message = '';
  for (let i = 0; i < array.length; i++) {
    message += `${array[i]}% humidity in ${i + 1} days ... `;
  }
  console.log(message);
};

printHumidities(arrOne);
printHumidities(arrTwo);
