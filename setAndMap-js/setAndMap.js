'use strict';

//SET
const orders = new Set(['rty', 'fgh', 'dfgh', 1000, false, 1000]);
console.log(orders);
console.log(new Set('Hello!!!'));
console.log(orders.size); // 5
console.log(orders.has(1000)); //true
// orders.clear();
for (const iterator of orders) {
  console.log(iterator);
}
//MAP
//основы
const restaurant = new Map();
restaurant.set('name', "McDonald's");
restaurant.set(1, 'London');
restaurant.set(2, 'Paris');
restaurant.set(3, 'Moscow');
console.log(restaurant);

restaurant.set('categories', [1, 2, 4, 5, 6]).set('open', 23).set('close', 23);
console.log(restaurant.get('categories'));
restaurant.delete('name');
console.log(restaurant);
// restaurant.clear()
const question = new Map([
  ['question', 'What?'],
  ['lang', 'c++'],
  ['lang2', 'js'],
]);
