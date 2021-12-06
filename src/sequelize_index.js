const {Sequelize, DataTypes, Model} = require('sequelize');
const path = require('path');


//create sequelize connection
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: path.join(__dirname, 'restaurants-seq.sqlite')
});

 module.exports={sequelize, DataTypes, Model};