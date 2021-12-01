// Template strings
const brand = 'Toyota'
const model = 'Camry'
const color = 'black'
const year = '2019'

let carHtml;

//Old approach(before ES6)
// carHtml = '<h3>' + 'Car Description' + '</h3>' + '<ul>' +
//           '<li>Brand' + brand + '</li>' +
//           '<li>Model' + model + '</li>' +
//           '<li>Color' + color + '</li>' +
//           '<li>Year' + year + '</li>' + '</ul>';


//New approach(new)
carHtml = `
  <h3 class="car">Car Description</h3>
  <ul>
    <li>Brand: ${brand}</li>
    <li>Model: ${model}</li>
    <li>Color: ${color}</li>
    <li>Year:  ${year}</li>

    <li>Year:  ${2010 + 9}</li>
    <li>Door number:  ${getDoorNumber()}</li>
    
    <li>Tax:  ${year > 2000 ? '20%' : '10%'}</li>
  </ul>
`

function getDoorNumber() {
  return 5;
}

document.body.innerHTML = carHtml;
