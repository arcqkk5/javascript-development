//kalvin
'use strict';

const calculateToKalvin = function () {
  const measyrement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Temperature in celsius: '),
  };

  // const kalvin = Number(measyrement.value) + 273;
  const kalvin = parseInt(measyrement.value) + 273;
  return kalvin;
};

console.log(calculateToKalvin());
