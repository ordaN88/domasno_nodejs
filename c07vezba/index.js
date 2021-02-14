require('./pkg/db');

const express = require ('express');
const bodyParser = require ('body-parser');

const appartments = require ('./handlers/appartments');



const api = express();
api.use(bodyParser.json());

api.get('/appartments', appartments.getAllAppartments);
api.get('/appartments/:id', appartments.getOneAppartment);
api.post('/appartments', appartments.createAppartment);
api.put('/appartments/:id', appartments.updateAppartment);
api.patch('/appartments/:id', appartments.updateAppartmentPartial);
api.delete('/appartments/:id',appartments.deleteAppartment);



api.listen(10000, err => {
    if(err) {
        return console.log('Could not start API ', err);
    }
    console.log('Server successfully started on port 10000');
});