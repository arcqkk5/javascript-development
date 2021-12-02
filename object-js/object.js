// const person = {
//   name: 'grigoriy',
//   lastName: 'lafutkin',
//   age: 20,
//   male: 'man',
//   isCar: true
// }
// console.log(person);


//Methods object
youraObject = {
  name: 'YouRa',
  lastname: 'Allanov',
  birthYear: 1990,
  job: 'programming',
  familyMembers: ['irina', 'misha', 'youra'],
  hasCar: true,
  // calcAge: function(birthYear) { return 2021 - birthYear }
  calcAge: function() {return 2021-this.birthYear}
}

// console.log(youraObject.calcAge(1974));
// console.log(youraObject['calcAge'](1974));

console.log(youraObject)

