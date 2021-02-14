const config = require('./pkg/config');
require('./pkg/db');
const express = require ('express');
const bodyParser = require ('body-parser');
const animals = require ('./handlers/animals');



const api = express();
api.use(bodyParser.json());

api.get('/api/v4/animals', animals.getAllAnimals);
api.get('/api/v4/animals/:id', animals.getOneAnimal);
api.post('/api/v4/animals', animals.createAnimal);
api.put('/api/v4/animals/:id', animals.updateAnimal);
api.patch('/api/v4/animals/:id', animals.updateAnimalPartial);
api.delete('/api/v4/animals/:id',animals.deleteAnimal);



api.listen(config.get('server').port, err => {
    if(err) {
        return console.log('Could not start API ', config.get('server').port);
    }
    console.log('Server successfully started on port 10000');
});