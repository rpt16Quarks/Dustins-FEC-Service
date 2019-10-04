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





// const itemNumber = faker.finance.account();
// //required
// const seller = faker.company.companyName();
// //required
// const itemDescName = faker.commerce.productName();
// //required
// const itemDescPhoto = faker.image.image();
// //required
// const itemSpecCondition = randomizerWrapper(getRandNum, 8);
// //required
// const itemSpecBrand = faker.company.companyName();
// const itemSpecUpc = randomizerWrapper(createRandNumString, 12);
// const itemSpecManufacturer = faker.company.companyName();
// const itemSpecMpn = faker.random.alphaNumeric(10);
// const itemSpecColor = faker.internet.color();
// const itemSpecSize = faker.random.number(2) + ' ' + randomizerWrapper(getRandomElement, unitsOfMeasurement);
// const itemSpecStyle = faker.commerce.productAdjective();
// const itemSpecSeason = randomizerWrapper(getRandomElement, seasons);
// const itemSpecGenre = faker.lorem.word();
// const itemSpecWeight = faker.random.number(3) + ' ' + randomizerWrapper(getRandomElement, unitsOfWeight);
// const itemSpecVolume = faker.random.number(3) + ' ' + randomizerWrapper(getRandonElement, unitsOfVolume);
// const itemSpecReturns = randomizerWrapper(getRandomElement, returns);
// const itemSpecMaterial = faker.commerce.productMaterial();
// const itemSpecTax = faker.random.number(2) + '%';
// const itemSpecCapactiy = faker.random.number(4);

//Product Object to be sent to db
// to be optimized so that each property is an object with a required/optional field and a value field
//also non faker randomization is buggy

const createProductTemplate = () => {
  return {
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
      faker.random.number(2) + ' ' + randomizerWrapper(getRandomElement, unitsOfMeasurement),

    itemSpecStyle: faker.commerce.productAdjective(),
    itemSpecSeason: randomizerWrapper(getRandomElement, seasons),
    itemSpecGenre: faker.lorem.word(),
    itemSpecWeight:
      faker.random.number(3) + ' ' + randomizerWrapper(getRandomElement, unitsOfWeight),
    itemSpecVolume:
      faker.random.number(3) + ' ' + randomizerWrapper(getRandomElement, unitsOfVolume),
    itemSpecReturns: randomizerWrapper(getRandomElement, returns),
    itemSpecMaterial: faker.commerce.productMaterial(),
    itemSpecTax: faker.random.number(2) + '%',
    itemSpecCapactiy: faker.random.number(4),
  };
}
const newProduct = () => {
  return fillRandomPropertyKeys(createProductTemplate(), 'itemSpecUpc');
};

for (let j = 0; j < noOfEntries; j++) {
  products.push(newProduct());
}




module.exports = {
  products
};
