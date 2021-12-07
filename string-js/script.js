'use strict';

//Работа со строками
// Ч1
const airLine = 'SkyUp Airline';
const airPlane = 'Boeing 737';

console.log(airPlane[0]); // B
console.log('Grigoriy'[0]); // G

console.log(airPlane.indexOf('7')); //7 - индекс первого элемента
console.log(airPlane.lastIndexOf('7')); //9

console.log(airPlane.slice(4)); // ng 737
console.log(airPlane.slice(7)); // 737
console.log(airPlane.slice(0, 6)); // Boing (6) - не включается

//извлечение по индексам
// Функция нахождения среднего места в самолете
console.log(airLine.slice(0, airLine.indexOf(' ')));

const checkMiddl = function (seat) {
  const seatLetter = seat.slice(-1);
  if (seatLetter === 'B' || seatLetter === 'E') {
    console.log('This is a middle seat.');
  } else {
    console.log('This is not a middle seat.');
  }
};

checkMiddl('21A');
checkMiddl('7B');
checkMiddl('14E');
console.log(new String('Hello!'));

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

const passName = 'liNDa'; // Linda
const passNewName = passName.toLowerCase();
const passFixed = passNewName[0].toUpperCase + passNewName.slice(1);

console.log(passFixed);

//Пример для работы с обрезкой + валидацией
const email = 'grigoriylafutkin@yandex.ru';
const loginEmail = '  GrigoriyLafutkin@yandex.ru \n';

const emailLower = loginEmail.toLowerCase();
const emailTrimmed = emailLower.trim();
console.log(emailTrimmed);

const emailNormal = loginEmail.toLowerCase().trim();
console.log(emailNormal);

//SPLIT
console.log('My+name+is+Grigoriy'.split('+'));
