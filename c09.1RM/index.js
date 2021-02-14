const express = require ('express');
const rick_and_morty = require('./handlers/rick_and_morty');

const api = express();

api.get('/api/v2/rick_and_morty/character/:characterId', rick_and_morty.GetCharacter);
api.get('/api/v2/rick_and_morty/location/:location', rick_and_morty.GetLocation);
api.get('/api/v2/rick_and_morty/episode/:episode', rick_and_morty.GetEpisode);


api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Service started on port 10000')
})