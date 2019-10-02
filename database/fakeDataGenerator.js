const faker = require('faker');
const noOfEntries = 100;

let products = [];

//creates a randomNumber from 0 to quantity-1
const insertRandNum = (quantity) => {
  const id = Math.floor(Math.random() * quantity);
  return id;
};

const createRandNumString = (length) => {
  let numString = '';
  for (let i = 0; i < length; i++) {
    numString.concat(`'${insertRandNum(10)}'`);
  }
  return numString;
};



const createNewProduct = () => {
  const product = {
    itemNumber: faker.finance.account(),
    seller: faker.company.companyName(),
    itemDescName: faker.commerce.productName(),
    itemDescPhoto: faker.image.image(),
    itemSpecCondition: insertRandNum(8) - 1,
    itemSpecUpc: createRandNumString(12),
    itemSpecManufacturer: faker.company.companyName(),
    itemSpecBrand: faker.company.companyName(),
    itemSpecMpn: faker.random.alphaNumeric(10),
    itemSpecColor: faker.internet.color(),
    itemSpecSize: `${createRandNumString(2)} cm`,
    itemSpecStyle: faker.commerce.productAdjective(),
    itemSpecRating: '',
    itemSpecSeason: '',
    itemSpecGenre: '',
    itemSpecWeight: '',
    itemSpecVolume: '',
    itemSpecReturns: '',
    itemSpecMaterial: '',
    itemSpecTax: '',
    itemSpecCapactiy: '',
  };
  return product;
};

for (let j = 0; j < noOfEntries; j++) {
  products.push(createNewProduct());
}




module.exports = {
  products
};