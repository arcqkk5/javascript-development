'use strict';

const japanesRestaurant = {
  name: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],
  orderFoot: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
};

//destructure
const arr = [3, 5, 7];
const x1 = arr[0];
const x2 = arr[1];
const x3 = arr[2];

const [y1, y2, y3] = arr;
console.log(y1, y2, y3);

let [main, , secondary] = japanesRestaurant.categories;
console.log(main, secondary);

//swap
[secondary, main] = [main, secondary];
console.log(main, secondary);

// console.log(japanesRestaurant.orderFoot(2, 1));
const [appetizer, mainFood] = japanesRestaurant.orderFoot(2, 1);
console.log(appetizer, mainFood);

const nestedArr = [1, 2, [4, 5]];
const [mass1, , [mass4, mass5]] = nestedArr;
console.log(mass1, mass4, mass5);

const newArr = [3, 5];

const [a = 0, b = 0, c = 0] = newArr;
console.log(a, b, c);
