const express = require('express');
const path = require('path');

const {Sequelize, sequelize} = require('./config/db_connection.js');
const {Car} = require('./models/car.js');

const publicPath = path.join(__dirname, '../public');
var app = express();
var port = process.env.PORT || 3000;

var numberOfRecords = 0;

app.use(express.static(publicPath));
app.use((request, response, next) => {
    var now = new Date().toString();
    var log = '\x1b[1m \x1b[35m' + now + ': \x1b[33m' + request.method + ' \x1b[34m' + request.url + ' ' + ' \x1b[32m' + response.statusCode;
    console.log(log);
    next();
});

// Find all
Car.findAll().then((cars) => {
    console.log('\n**** findAll():\n', JSON.stringify(cars, undefined, 2));
}).catch((error) => {
    console.log(error);
});

// Find one
Car.findOne().then((car) => {
    console.log('\n**** findOne():\n', JSON.stringify(car, undefined, 2));
}).catch((error) => {
    console.log(error);
});

// Find one with attributes
Car.findOne({
    where: {
        id: 3
    }
}).then((car) => {
    console.log('\n**** findOne(id = 3):\n', JSON.stringify(car, undefined, 2));
}).catch((error) => {
    console.log(error);
});

// Find by id
Car.findById(2).then((car) => {
    console.log('\n**** findById(2):\n', JSON.stringify(car, undefined, 2));
}).catch((error) => {
    console.log(error);
});

// Find and count all
Car.findAndCountAll().then((result) => {
    console.log('\n**** findAndCountAll():\n', result.count);
    numberOfRecords = result.count;
}).catch((error) => {
    console.log(error);
});

// Create new
Car.findAndCountAll().then((result) => {
    Car.create({
        id: ++result.count,
        make: 'insertedMake',
        model: 'insertedModel',
        engine: 1.8
    }).then((car) => {
        console.log('\n**** create():\n', JSON.stringify(car, undefined, 2));
    }).catch((error) => {
        console.log(error);
    });
});

// Update
Car.update(
    {make: 'Updated at: ' + new Date().toString()},
    {where:{id: 5}}
).then(() => {
    console.log('\n**** Car ID 5 updated.\n');
}).catch((error) => {
    console.log(error);
});

// Find last and delete
Car.findOne({
    order: [['id', 'DESC']]
}).then((car) => {
    Car.destroy({
        where: {
            id: car.id
        }
    }).then(() => {
        console.log('\n**** Last record deleted.\n');
    });
}).catch((error) => {
    console.log(error);
});

app.listen(port, () => {
    console.log(`Server started on port ${port} \n`);
});

module.exports = {
    app: app
};
