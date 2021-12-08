'use strict';

// Closures
// const safeBooking = function () {
//   let passCount = 0;

//   return function () {
//     passCount++;
//     console.log(`${passCount} passCount`);
//   };
// };

// const booker = safeBooking();
// booker();
// booker();

// booker();
// booker();

let f1;

const f2 = function () {
  const x = 11;
  f1 = function () {
    console.log(x ** 2);
  };
};

f2();
f1();
