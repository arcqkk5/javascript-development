'use strict';

const japanesRestaurant = {
  nameF: 'Banzai',
  location: '108 Markham Woods Rd, Longwood, USA',
  categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
  appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamame', 'Sushi rice'],
  mainMenu: ['Sushi', 'Ramen', 'Tempura'],
  workingHours: {
    wed: {
      open: 10,
      close: 23,
    },
    fri: {
      open: 10,
      close: 23,
    },
    sun: {
      open: 12,
      close: 22,
    },
  },

  orderFoot: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
};

/**********************************
 * DISTRUCTURE ARRAY
 * *******************************/
// const arr = [3, 5, 7];
// const x1 = arr[0];
// const x2 = arr[1];
// const x3 = arr[2];

// const [y1, y2, y3] = arr;
// console.log(y1, y2, y3);

// let [main, , secondary] = japanesRestaurant.categories;
// console.log(main, secondary);

// //swap
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// // console.log(japanesRestaurant.orderFoot(2, 1));
// const [appetizer, mainFood] = japanesRestaurant.orderFoot(2, 1);
// console.log(appetizer, mainFood);

// const nestedArr = [1, 2, [4, 5]];
// const [mass1, , [mass4, mass5]] = nestedArr;
// console.log(mass1, mass4, mass5);

// const newArr = [3, 5];

// const [a = 0, b = 0, c = 0] = newArr;
// console.log(a, b, c);

/**********************************
 * DISTRUCTURE OBJECT
 * *******************************/
// const { nameF, categories, workingHours } = japanesRestaurant;

// console.log(nameF, categories, workingHours);

// const {
//   nameF: restName,
//   categories: cat,
//   workingHours: www,
// } = japanesRestaurant;
// console.log(restName, cat, www);

// let x = 5;
// let y = 6;
// const obj = { x: 30, y: 40, z: 50 };

// ({ x, y } = obj);
// console.log(x, y);

/**************
 * ****SPREAD**
 * ************/
const arr = [1, 3, 5];
//old aproach
const newArr = [7, 9, arr[0], arr[1], arr[2]];

//new aproach
const newArr2 = [7, 9, ...arr];
console.log(newArr);
console.log(newArr2);
console.log(...newArr2);

const newMainMenu = [...japanesRestaurant.mainMenu, 'qwerty', 'ghjj'];
console.log(newMainMenu);

// Array copy
const categoriesCopy = [...japanesRestaurant.categories];

//Merge arrays
const fullMenu = [
  ...japanesRestaurant.appetizers,
  ...japanesRestaurant.mainMenu,
];
console.log(fullMenu);
