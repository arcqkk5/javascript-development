/*****************************
 *   Task 3 - function
 ****************************/
'use strict'

const getAverage = (mountOne, mountTwo, mountThree) => (mountOne + mountTwo + mountThree)/3
const printBonus = (dept1AverSales, dept2AverSales) => {
  let c;
  let num;
  const isMax = Math.max(dept1AverSales, dept2AverSales) == dept1AverSales ? true : false;
  if (isMax) {
    num = dept1AverSales/dept2AverSales * 100 > 30 ? true : false
  } else {
    num = dept2AverSales/dept1AverSales * 100 > 30 ? true : false
  }
  if (num) {
    switch (isMax) {
      case true :
        c = ((dept1AverSales - dept2AverSales) / dept2AverSales) * 100
        console.log(`Бонус первого отдела: ${c}`)
        break
      case false :
        c = ((dept2AverSales - dept1AverSales) / dept1AverSales) * 100
        console.log(`Бонус второго отдела: ${c}`)
        break
    }
  } else {
    console.log('В этом месяце бонуса нет!')
  }
}
const dept1 = getAverage(50301, 21984, 19207);
const dept2 = getAverage(72381, 41562, 29465);
printBonus(dept1, dept2);