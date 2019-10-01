const express = require('express');
const db = require('../database/index.js');

const app = express();

var port = 3002;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));




app.listen(port, () => console.log(`App is listening on port ${port}`));


db.connection.connect(function(err) {
  console.log('connected!');
  if (err) {
    console.log('err', err);
  } else {
    console.log('connected!');
  }
});