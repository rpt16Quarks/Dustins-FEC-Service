const faker = require('faker');
const { getRandNum, createRandNumString, getRandomElement, fillRandomPropertyKeys, randomizerWrapper } = require('./randomDataUtility');
const noOfEntries = 100;

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
//also non faker randomization is buggy
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
  itemSpecCondition: randomizerWrapper(getRandNum, 8),
  //required
  itemSpecBrand: faker.company.companyName(),
  itemSpecUpc: randomizerWrapper(createRandNumString, 12),
  itemSpecManufacturer: faker.company.companyName(),
  itemSpecMpn: faker.random.alphaNumeric(10),
  itemSpecColor: faker.internet.color(),
  itemSpecSize:
    randomizerWrapper(createRandNumString, 2) + ' ' + randomizerWrapper(getRandomElement, unitsOfMeasurement),

  itemSpecStyle: faker.commerce.productAdjective(),
  itemSpecSeason: randomizerWrapper(getRandomElement, seasons),
  itemSpecGenre: faker.lorem.word(),
  itemSpecWeight:
    randomizerWrapper(getRandNum, 100) + ' ' + randomizerWrapper(getRandomElement, unitsOfWeight),
  itemSpecVolume:
    randomizerWrapper(getRandNum, 1000) + ' ' + randomizerWrapper(getRandNum, 1000),
  itemSpecReturns: randomizerWrapper(getRandomElement, returns),
  itemSpecMaterial: faker.commerce.productMaterial(),
  itemSpecTax: randomizerWrapper(createRandNumString, 2) + '%',
  itemSpecCapactiy: randomizerWrapper(getRandNum, 1000),
};

const newProduct = () => {
  return fillRandomPropertyKeys(productTemplate, 'itemSpecUpc');
};

for (let j = 0; j < noOfEntries; j++) {
  products.push(newProduct());
}




module.exports = {
  products
};
