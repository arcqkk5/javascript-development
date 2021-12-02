// Task 5
//BMI index object

const mike = {
  name: 'Mike',
  lastname: 'Black',
  weight: 91,
  height: 1.93,
  bodyMassIndex: function() {
    this.bmi = this.weight/Math.pow(this.height, 2)
    return this.bmi
  } 
}
const jack = {
  name: 'Jack',
  lastname: 'White',
  weight: 79,
  height: 1.70,
  bodyMassIndex: function() {
    this.bmi = this.weight/Math.pow(this.height, 2)
    return this.bmi
  }
}

console.log(mike.bodyMassIndex(), jack.bodyMassIndex());

const bodyFunction = function(a, b) {
  if (a.bodyMassIndex > b.bodyMassIndex) {
    console.log(`${a.name} ${a.lastname} BMI (${a.bmi}) is higher then ${b.name} ${b.lastname} BMI (${b.bmi})`)
  } else {
    console.log(`${b.name} ${b.lastname} BMI (${b.bmi}) is higher then ${a.name} ${a.lastname} BMI (${a.bmi})`)
  }
}
const provd = bodyFunction(mike, jack); 