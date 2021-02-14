const animalData = require('../pkg/animals');
const animalDataValidator = require ('../pkg/animals/validator');


const getAllAnimals  = async (req,res) => {
    try{
        let data = await animalData.getAll();
        return res.status(200).send(data);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    
};
const getOneAnimal = async (req,res) => {
    try{
        let data = await animalData.getOne(req.params.id);
        if(data) {
            return res.status(200).send(data);
        }
       return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};
const createAnimal = async (req,res) => {
    try{
        await animalDataValidator.animal(req.body, animalDataValidator.animalSchema);
       let data = await animalData.create(req.body);
        return res.status(200).send(data);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};
const updateAnimal = async (req,res) => {
    try{
        let data = await animalData.update(req.params.id, req.body);
        if(data.nModified === 0) {
            return res.status(404).send('Not Found');
            }
        return res.status(204).send('');
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};
const updateAnimalPartial = async (req,res) => {
    try {
       let data =  await animalData.updatePartial(req.params.id, req.body);
        if(data.nModified === 0) {
            return res.status(404).send('Not Found');
            }
       return  res.status(204).send('');
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
};
const deleteAnimal = async (req,res) => {
    try {
       let data =  await animalData.remove(req.params.id);
        if(data.deletedCount === 0) {
            return res.status(404).send('Not Found')
        }
        return res.status(204).send('');
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};


module.exports = {
    
getAllAnimals,
getOneAnimal,
createAnimal,
updateAnimal,
updateAnimalPartial,
deleteAnimal,
};