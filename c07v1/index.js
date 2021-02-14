const config = require('./pkg/config');
require ('./pkg/db');
const express = require ('express');
const bodyParser = require ('body-parser');
const drinks = require ('./handlers/drinks');

const api = express();
api.use(bodyParser.json());


api.get('/api/v3/drinks', drinks.getAllDrinks);
api.get('/api/v3/drinks/:id', drinks.getOneDrink);
api.post('/api/v3/drinks', drinks.createDrink);
api.put('/api/v3/drinks/:id', drinks.updateDrink);
api.patch('/api/v3/drinks/:id', drinks.updateDrinkPartial);
api.delete('/api/v3/drinks/:id', drinks.deleteDrink);


api.listen(config.get('server').port, err => {
    if(err) {
        return console.log('Could not start API ',config.get('server').port);
    }
    console.log('Server successfully started on port 10000');
});