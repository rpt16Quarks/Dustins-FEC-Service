const express = require('express');
const { Condition, Product } = require('../database/model.js');
const path = require('path');

const app = express();

var port = 3002;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirName, 'public')));


app.listen(port, () => console.log(`App is listening on port ${port}`));

