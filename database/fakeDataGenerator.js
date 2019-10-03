const faker = require('faker');
const { getRandNum, createRandNumString, getRandomElement, fillRandomPropertyKeys } = require('./randomDataUtility');
const noOfEntries = 1;

let products = [];




/*********Choices Library***********/

const returns = ['yes', 'no', '30 days', '15 days', 'lifetime', 'Earth\'s Lifetime', 'infinite'];

const seasons = ['spring', 'winter', 'summer', 'fall'];

const unitsOfMeasurement = ['ft', 'in', 'cm', 'mm', 'cm^2', 'cm^3', 'mm^3'];

const unitsOfVolume = ['cm^3', 'mm^3', 'mL', 'L', 'oz', 'pt'];

const unitsOfWeight = ['kg', 'g', 'lb', 'oz', 'mg', 'tons', 'metric tons'];





/********************/


//Product Object to be sent to db
// to be optimized so that each property is an object with a required/optional field and a value field
const productTemplate = {
  //required
  itemNumber: faker.finance.account(),
  //required
  seller: faker.company.companyName(),
  //required
  itemDescName: faker.commerce.productName(),
  //required
  itemDescPhoto: faker.image.image(),
  //required
  itemSpecCondition: getRandNum(8) - 1,
  //required
  itemSpecBrand: faker.company.companyName(),
  itemSpecUpc: createRandNumString(12),
  itemSpecManufacturer: faker.company.companyName(),
  itemSpecMpn: faker.random.alphaNumeric(10),
  itemSpecColor: faker.internet.color(),
  itemSpecSize: createRandNumString(2) + ' ' + getRandomElement(unitsOfMeasurement),
  itemSpecStyle: faker.commerce.productAdjective(),
  itemSpecVolume: createRandNumString(2) + ' ' + getRandomElement(unitsOfVolume),
  itemSpecSeason: createRandNumString(2) + ' ' + getRandomElement(seasons),
  itemSpecGenre: faker.lorem.word(),
  itemSpecWeight: getRandomElement(unitsOfWeight),
  itemSpecFeatures: faker.lorem.words(),
  itemSpecReturns: getRandomElement(returns),
  itemSpecMaterial: faker.commerce.productMaterial(),
  itemSpecTax: createRandNumString(2) + '%',
  itemSpecCapactiy: createRandNumString(3),
};

const newProduct = fillRandomPropertyKeys(productTemplate, 'itemSpecUpc');

for (let j = 0; j < noOfEntries; j++) {
  products.push(newProduct);
}




module.exports = {
  products
};