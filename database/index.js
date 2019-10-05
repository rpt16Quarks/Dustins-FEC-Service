
const Sequelize = require('sequelize');

const sequelize = new Sequelize( 'fec', 'root', '', {
  host: 'localhost',
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
