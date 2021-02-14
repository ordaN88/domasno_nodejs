const config = require('./pkg/config');
require('./pkg/db');
const express = require('express');
const bodyParser = require('body-parser')
const boats = require('./handlers/boats');
const auth = require ('./handlers/auth');
const jwt = require('express-jwt')


const api = express();
api.use(bodyParser.json());

api.use(bodyParser.json());
api.use(jwt({
    secret: config.get('server').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        '/api/v2/auth/create-account',
        '/api/v2/auth/login'
    ]
}));
api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad Token');
    }
});

api.post('/api/v2/auth/create-account', auth.createAccount);
api.post('/api/v2/auth/login', auth.login);
api.get('/api/v2/auth/refresh-token', auth.refreshToken)


api.get('/api/v2/boats', boats.getAllBoats); 
api.get('/api/v2/boats/:id', boats.getOneBoat);
api.post('/api/v2/boats', boats.createBoat);
api.put('/api/v2/boats/:id', boats.updateBoat);
api.patch('/api/v2/boats/:id', boats.updateBoatPartial);
api.delete('/api/v2/boats/:id', boats.removeBoat);


api.listen(config.get('server').port, err => {
    if(err) {
        console.log(err)
    }
    console.log('Server successfull started on port 10000', config.get('server').port )
})