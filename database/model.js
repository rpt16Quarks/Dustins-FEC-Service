const faker = require('faker');
const Sequelize = require('sequelize');
const {sequelize} = require('./index.js');
const Model = Sequelize.Model;
// const {products} = require('./fakeDataGenerator.js');


/****************Condition Model********** */

class Condition extends Model {}

Condition.init({
  itemSpecCondition: Sequelize.STRING
}, {
  sequelize,
  modelName: 'condition'
});


/*****************Product Model************/

class Product extends Model {}

Product.init({
  itemNumber: Sequelize.STRING,
  seller: Sequelize.STRING,
  itemDescName: Sequelize.STRING,
  itemDescPhoto: Sequelize.BLOB('long'),
  itemSpecCondition: Sequelize.STRING,
  itemSpecBrand: Sequelize.STRING,
  //end required properties
  itemSpecUpc: Sequelize.STRING,
  itemSpecManufacturer: Sequelize.STRING,
  itemSpecMpn: Sequelize.STRING,
  itemSpecColor: Sequelize.STRING,
  itemSpecSize: Sequelize.STRING,
  itemSpecStyle: Sequelize.STRING,
  itemSpecSeason: Sequelize.STRING,
  itemSpecGenre: Sequelize.STRING,
  itemSpecWeight: Sequelize.STRING,
  itemSpecVolume: Sequelize.STRING,
  itemSpecReturns: Sequelize.STRING,
  itemSpecMaterial: Sequelize.STRING,
  itemSpecTax: Sequelize.STRING,
  itemSpecCapactiy: Sequelize.STRING,
  //end optional properties
}, {
  sequelize,
  modelName: 'product'
});



// var conditionsList = [
//   { itemSpecCondition: 'New with tags' },
//   { itemSpecCondition: 'Manufacturer refurbished' },
//   { itemSpecCondition: 'preowned' },
//   { itemSpecCondition: 'New with defects' },
//   { itemSpecCondition: 'New without tags' },
//   { itemSpecCondition: 'Seller refurbished'}];

// Condition.sync({force: true}).then(
//   () => {
//     Condition.hasMany(Product);
//     return Condition
//       .bulkCreate(conditionsList)
//       .then((records)=>{
//         console.log('Conditions Inserted');
//       });
//   }
// ).catch((error) => {
//   console.log('error', error);
// });


// var productList = products;

// Product.sync({force: true}).then(
//   () => {
//     return Product
//       .bulkCreate(productList)
//       .then((records)=>{
//         console.log('Records Inserted');
//       });
//   }
// ).catch((error) => {
//   console.log('error', error);
// });





module.exports = {
  Condition,
  Product
};

