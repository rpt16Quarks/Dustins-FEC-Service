const faker = require('faker');
const Sequelize = require('sequelize');
const {sequelize} = require('./index.js');
const Model = Sequelize.Model;
const {products} = require('./fakeDataGenerator.js')

console.log('products', products);
class Condition extends Model {}

Condition.init({
  itemSpecCondition: Sequelize.STRING
}, {
  sequelize,
  modelName: 'condition'
});

class Product extends Model {}
Product.init({
  itemNumber: Sequelize.STRING,
  seller: Sequelize.STRING,
  itemDescName: Sequelize.STRING,
  itemDescPhoto: Sequelize.BLOB('long'),
  itemSpecCondition: Sequelize.STRING,
  itemSpecUpc: Sequelize.STRING,
  itemSpecManufacturer: Sequelize.STRING,
  itemSpecBrand: Sequelize.STRING,
  itemSpecMpn: Sequelize.STRING,
  itemSpecColor: Sequelize.STRING,
  itemSpecSize: Sequelize.STRING,
  itemSpecStyle: Sequelize.STRING,
  itemSpecRating: Sequelize.STRING,
  itemSpecSeason: Sequelize.STRING,
  itemSpecGenre: Sequelize.STRING,
  itemSpecWeight: Sequelize.STRING,
  itemSpecVolume: Sequelize.STRING,
  itemSpecReturns: Sequelize.STRING,
  itemSpecMaterial: Sequelize.STRING,
  itemSpecTax: Sequelize.STRING,
  itemSpecCapactiy: Sequelize.STRING,
}, {
  sequelize,
  modelName: 'product'
});

Condition.hasMany(Product);

var conditionsList = [
  { itemSpecCondition: 'New with tags' },
  { itemSpecCondition: 'Manufacturer refurbished' },
  { itemSpecCondition: 'preowned' },
  { itemSpecCondition: 'New with defects' },
  { itemSpecCondition: 'New without tags' },
  { itemSpecCondition: 'Seller refurbished'}];



Condition
  .bulkCreate(conditionsList)
  .then((records)=>{
    console.log('Records Inserted', records);
  })
  .catch((error) => {
    console.log('error', error);
  });

var productList = products;

Product
  .bulkCreate(productList)
  .then((records)=>{
    console.log('Records Inserted', records);
  })
  .catch((error) => {
    console.log('error', error);
  });

// sequelize.sync({ force: true });

module.exports = {
  Condition,
  Product
};

