const express = require('express');
const { Condition, Product, sequelize } = require('../database/model.js');
const seeder = require('../database/seeder.js');
const path = require('path');

const app = express();

var port = 3002;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));


app.get('/product', (req, res) => {
  sequelize.query('select * from products inner join conditions on products.itemSpecConditionId = conditions.id where products.id = 1').then((data) => {
    console.log('Found it', data);

    res.end(JSON.stringify(data));
  }).catch ((err) => {
    console.log('error', err);
  });

});


app.listen(port, () => console.log(`App is listening on port ${port}`));

