// const tinyRick = require('rickmortyapi')
const rick_and_morty = require('rickmortyapi')
// let cashe = {};

const GetCharacter = async(req, res) => {
    
    try {
    //     let ctime = new Date().getTime();

    // if(cashe[req.params.character] && (ctime - cache[req.params.character].timestamp) < (30 * 1000)) {
    //     res.status(200).send(cache[req.params.character].data);
    //     return;
    
        //const data = await rick_and_morty.getCharacter(1);   // ili mesto 1 ta  ova da se napise (parseInt(req.params.characterId));
      // res.status(200).send(data);
    //    const theSmiths = await rick_and_morty.getCharacter([ 2, 3, 4, 5 ])
    //    res.status(200).send(theSmiths)
       const moreChars = await rick_and_morty.getCharacter({ page: 3 })
       res.status(200).send(moreChars)
    }catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    //  rick_and_morty.getCharacter(function (err, data) {
    //     cashe[req.params.character] = {
    //         timestamp: new Date().getTime(),
    //         data: data
    //     };
    //     res.status(200).send(data);
        
    // });
    
    

};


const GetLocation = async (req, res) => {
    try {
        const data = await rick_and_morty.getLocation(1);
        res.status(200).send(data);
    }catch(err) {
            console.log(err);
            res.status(500).send('Intetnal Server Error');
    }
};

const GetEpisode = async (req, res) => {
    try {
        const data = await rick_and_morty.getEpisode(1);
        res.status(200).send(data);
    }catch(err) {
            console.log(err);
            res.status(500).send('Intetnal Server Error');
    }
};

module.exports = {
    GetCharacter,
    GetLocation,
    GetEpisode

};