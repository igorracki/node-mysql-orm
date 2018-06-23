const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodedb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // Sequelize add timestamps to all queries which are enabled by default.
    // If the db tables do not contain timestamp fields, then it will throw
    // an error, so need to switch it off.
    define: {
        timestamps: false
    }
});

sequelize.authenticate().then(() => {
    console.log('\n\x1b[1m\x1b[32mConnection to the database established!\n\x1b[0m');
}).catch((error) => {
    console.log('\n\x1b[1m\x1b[31mUnable to connect to the database:', error, '\n\x1b[0m');
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
