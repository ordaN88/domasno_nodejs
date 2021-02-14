const carData = require('../pkg/cars');


const getAllCars  = async (req,res) => {
    try{
        let data = await carData.getAll();
        res.status(200).send(data);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    
};
const getOneCar = async (req,res) => {
    try{
        let data = await carData.getOne(req.params.id);
        if(data === null) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};
const createCar = async (req,res) => {
    try{
        await carData.create(req.body);
        res.status(201).send(req.body);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};
const updateCar = async (req,res) => {
    try{
        await carData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};
const updateCarPartial = async (req,res) => {
    try {
        await carData.updatePartial(req.params.id, req.body);
        res.status(204).send(req.body);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
};
const deleteCar = async (req,res) => {
    try {
        await carData.remove(req.params.id);
        res.status(204).send(req.body);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};


module.exports = {
    
getAllCars,
getOneCar,
createCar,
updateCar,
updateCarPartial,
deleteCar,
};