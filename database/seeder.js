const { Condition, Product } = require('./model.js');
const { products } = require('./fakeDataGenerator.js');

/******************Product Seed*************************/

var productList = products;

Product.sync({force: true}).then(
  () => {
    return Product
      .bulkCreate(productList)
      .then((records)=>{
        console.log('Records Inserted');
      });
  }
).catch((error) => {
  console.log('error', error);
});

/**********************Condition Seed*******************/

var conditionsList = [
  { itemSpecCondition: 'New with tags' },
  { itemSpecCondition: 'Manufacturer refurbished' },
  { itemSpecCondition: 'preowned' },
  { itemSpecCondition: 'New with defects' },
  { itemSpecCondition: 'New without tags' },
  { itemSpecCondition: 'Seller refurbished'}];

Condition.sync({force: true}).then(
  () => {
    Condition.hasMany(Product);
    return Condition
      .bulkCreate(conditionsList)
      .then((records)=>{
        console.log('Conditions Inserted');
      });
  }
).catch((error) => {
  console.log('error', error);
});

