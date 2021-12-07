'use strict';

//1
// const bookings = [];
// //Function
// const makeBooking = function (flighNum, passengersNum = 1, price = 99) {
//   // passengersNum = passengersNum || 1;
//   // price = price || 99;

//   const booking = {
//     flighNum,
//     passengersNum,
//     price,
//   };
//   console.log(booking);

//   bookings.push(booking);
// };

// makeBooking('QE123');

//2
// const flighNumber = 'BV338';
// const pass146 = {
//   firstName: 'JACK',
//   lastName: 'Brown',
//   password: 'HT1245678',
// };

// const checkIn = function (flight, passanger) {
//   flight = 'bv328';

//   //1 способ
//   const newObj = { ...passanger };

//   //2 способ
//   // const newObj = Object.assign({}, passanger);

//   //3 способ
//   // const newObj = JSON.parse(JSON.stringify(passanger));

//   newObj.lastName = newObj.lastName.toLowerCase();
//   newObj.firstName = newObj.firstName.toLowerCase();

//   if (newObj.password === 'HT1245678') {
//     alert('Welcome!');
//   } else {
//     alert('Goodbay!');
//   }
//   console.log(newObj);
// };

// checkIn(flighNumber, pass146);
// console.log(flighNumber);
// console.log(pass146);

// //функции принимающие callback функции

// const removeSpaces = function (text) {
//   return text.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (text) {
//   const [first, ...others] = text.split(' ');
//   return [first.toUpperCase(), others].join(' ');
// };

// const converter = function (str, func) {
//   console.log(`The converted text: ${str}`);
//   console.log(`The converted text: ${func(str)}`);
//   console.log(`Converted by : ${func.name}`);
// };

// converter('Hello to everyone!', upperFirstWord);
// converter('Hello to everyone!', removeSpaces);

// const greet = (greetingText) => {
//   return function (firstName) {
//     console.log(`${greetingText} ${firstName}`);
//   };
// };
// // или 2 способ

// const newGreet = (greetingText) => (firstName) =>
//   console.log(`${greetingText} ${firstName}`);

// greet('Hi')('Grigoriy');
// newGreet('Hello')('Grigoriy');

//Методы call() and apply()
// const book = function (flightNumber, passangerName) {
//   console.log(
//     `${passangerName} has booked a ticket on ${this.airLineName} flight ${this.airLineCode}${flightNumber}`
//   );
//   this.bookings.push({
//     flight: `${this.airLineCode}${flightNumber}`,
//     passangerName,
//   });
// };

const airLine1 = {
  airLineName: 'SkyUp',
  airLineCode: 'SU',
  bookings: [],
  book(flightNumber, passangerName) {
    console.log(
      `${passangerName} has booked a ticket on ${this.airLineName} flight ${this.airLineCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.airLineCode}${flightNumber}`,
      passangerName,
    });
  },
};

// airLine2.book(346, 'Grigoriy Lafutkin');
// airLine2.book(347, 'New Passanger MR.');
// console.log(airLine2);

const airLine2 = {
  airLineName: 'EuroEva',
  airLineCode: 'EE',
  bookings: [],
};
const book = airLine1.book;

//This doesen't work
//book(345, 'Linda)

// book.call(airLine1, 345, 'Linda');

//bind()
const bookAirLines2 = book.bind(airLine2);
bookAirLines2(45, 'John');
