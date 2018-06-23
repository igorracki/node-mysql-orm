const {Sequelize, sequelize} = require('./../config/db_connection.js');

const Car = sequelize.define('car', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    make: {
        type: Sequelize.STRING
    },
    model: {
        type: Sequelize.STRING
    },
    engine: {
        type: Sequelize.DOUBLE
    }
});

module.exports = {
    Car: Car
};
