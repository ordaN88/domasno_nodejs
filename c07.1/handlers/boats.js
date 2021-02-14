const boatData = require('../pkg/boats');
const boatDataValidator = require ('../pkg/boats/validator');

const getAllBoats = async (req, res) => {
    try {
        let data = await boatData.getAll();
        return res.status(200).send(data);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

const getOneBoat = async (req, res) => {
    try {
        let data = await boatData.getOne(req.params.id);
        if(data) {
            return res.status(200).send(data)
        }
        return res.status(404).send('Not Found');
    }catch(err) {
        console.log(err);
        res.status(500).send('Internal Status Error');
    }
}
 
const createBoat = async (req, res) => {
    try{
        await boatDataValidator.boat(req.body, boatDataValidator.boatSchema);
        let data = await boatData.create(req.body);
        return res.status(200).send(data);
    }catch(err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
    }
}

const updateBoat = async (req, res) => {
    try {
        let data = await boatData.update(req.params.id, req.body);
        if(data.nModified === 0) {
            return res.status(404).send('Not Found');
            }
        return res.status(204).send('');

    }catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');

    }
}

const updateBoatPartial = async (req, res) => {
    try {
        let data = await boatData.update(req.params.id, req.body);
        if(data.nModified === 0) {
            return res.status(404).send('Not Found');
            }
        return res.status(204).send('')
    }catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

const removeBoat = async (req, res) => {
    try {
        let data = await boatData.remove(req.params.id);
        if(data.deletedCount === 0) {
            return res.status(404).send('Not Found')
        }
        return res.status(204).send('')
    }catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    getAllBoats,
    getOneBoat,
    createBoat,
    updateBoat,
    updateBoatPartial,
    removeBoat,
};