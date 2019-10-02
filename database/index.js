
const Sequelize = require('sequelize');

const sequelize = new Sequelize( 'fec', 'root', '', {
  host: 'localhost',
  // port: 3006,
  dialect: 'mysql'
});
const dbStatus = sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = {
  dbStatus,
  sequelize,
};




// class Condition extends Model {}
// Condition.init({
//   itemSpecCondition: Sequelize.STRING
// }, {
//   sequelize,
//   modelName: 'condition'
// });












// var connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3002,
//   user: 'root',
//   password: '',
//   database: 'fec'
// });

// module.exports = {connection};

// connection.connect();

// connection.query('select * from products',function (error, results, fields) {
//   if (error) {
//     throw error;
//   }
//   console.log('results and fields', results, fields);
// });

// connection.end();