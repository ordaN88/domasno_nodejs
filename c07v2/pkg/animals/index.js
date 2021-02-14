const mongoose = require('mongoose');

const Animals = mongoose.model(
    'animals',
    {
      
        name: String,
        family: String,
        continets: [String],
        carnivore: Boolean,
        mamal: Boolean,
    },
    'animals'
);

const getAll = async () => {
    let animals = await Animals.find({});
    return animals ;
 };

 const getOne = async (id) => {
     let animals = await Animals.findOne({_id: id});
     return animals;
 };

 const create = async (data) => {
     let animal = new Animals(data);
     await animal.save();
 };

 const update = async (id, data) => {
     await Animals.updateOne({_id: id}, data);
 };

 const updatePartial = async (id, data) => {
     await Animals.updateOne({_id: id }, data);
 };

 const remove = async (id) => {
     await Animals.deleteOne({_id: id});
 };

 module.exports = {
     getAll,
     getOne,
     create,
     update,
     updatePartial,
     remove,

 };