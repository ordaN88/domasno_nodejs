const appartmentData = require ('../pkg/appartments');

const getAllAppartments = async (req, res) => {
    try{
        let data = await appartmentData.getAll();
        res.status(200).send(data);
    }catch (err) {
        console.log(err)
        res.status(500).send('jok more');
    }
};

const getOneAppartment = async (req, res) => {
    try{
        let data = await appartmentData.getOne(req.params.id);
        if(data === null) {
            return res.status(400).send('NOt found');
        }
        res.status(200).send(data);
    }catch (err) {
         console.log(err)
         res.status(500).send('ma jok bre');
    }
};

const createAppartment = async (req, res) => {
    try {
        await appartmentData.create(req.body);
        res.status(201).send(req.body);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateAppartment = async (req, res) => {
    try {
        await appartmentData.update(req.params.id, req.body);
        res.status(500).send('Internal Server Error');
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateAppartmentPartial = async (req, res) => {
    try {
        await appartmentData.updatePartial(req.params.id, req.body);
        res.status(204).send(req.body);
    }catch (err) { 
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    
};

const deleteAppartment = async (req, res) => {
    try {
        await appartmentData.remove(req.params.id);
        res.status(204).send(req.body);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};


module.exports = {
    
    getAllAppartments,
    getOneAppartment,
    createAppartment,
    updateAppartment,
    updateAppartmentPartial,
    deleteAppartment,
    };