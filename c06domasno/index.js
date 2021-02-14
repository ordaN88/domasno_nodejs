require('./pkg/db');

const express = require ('express');
const bodyParser = require ('body-parser');

const cars = require ('./handlers/cars');



const api = express();
api.use(bodyParser.json());

api.get('/cars', cars.getAllCars);
api.get('/cars/:id', cars.getOneCar);
api.post('/cars', cars.createCar);
api.put('/cars/:id', cars.updateCar);
api.patch('/cars/:id', cars.updateCarPartial);
api.delete('/cars/:id',cars.deleteCar);



api.listen(10000, err => {
    if(err) {
        return console.log('Could not start API ', err);
    }
    console.log('Server successfully started on port 10000');
});