const drinkData = require('../pkg/drinks');
const drinkDataValidator = require ('../pkg/drinks/validator')


const getAllDrinks  = async (req,res) => {
    try{
        let data = await drinkData.getAll();
        res.status(200).send(data);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    
};
const getOneDrink = async (req,res) => {
    try{
        let data = await drinkData.getOne(req.params.id);
        if(data === null) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};
const createDrink = async (req,res) => {
    try{
        await drinkDataValidator.drink(req.body, drinkDataValidator.drinkSchema);
        await drinkData.create(req.body);
        res.status(201).send(req.body);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};
const updateDrink = async (req,res) => {
    try{
        await drinkData.update(req.params.id, req.body);
        if(data.nModified === 0) {
            return res.status(404).send('Not Found');
            }
        res.status(204).send(req.body);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};
const updateDrinkPartial = async (req,res) => {
    try {
        await drinkData.updatePartial(req.params.id, req.body);
        if(data.nModified === 0) {
            return res.status(404).send('Not Found');
            }
        res.status(204).send(req.body);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
};
const deleteDrink = async (req,res) => {
    try {
        await drinkData.remove(req.params.id);
        if(data.deletedCount === 0) {
            return res.status(404).send('Not Found')
        }
        res.status(204).send(req.body);
    }catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};


module.exports = {
    
getAllDrinks,
getOneDrink,
createDrink,
updateDrink,
updateDrinkPartial,
deleteDrink,
};