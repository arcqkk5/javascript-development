'use strict'

//11, 20, 47

const calculateTips = (bill) => bill < 20 ? bill * 0.2 : bill * 0.15

const billArray = [11, 20, 47]

const tipsArray = []
const calcBillTipsArray = []

for (let index = 0; index < billArray.length; ++index) {
  tipsArray[index] = calculateTips(billArray[index]);
  calcBillTipsArray[index] = billArray[index] + calculateTips(billArray[index]);  
}

console.log(billArray)
console.log(tipsArray)
console.log(calcBillTipsArray)

