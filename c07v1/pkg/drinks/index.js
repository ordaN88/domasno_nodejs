const mongoose = require('mongoose');

const Drinks = mongoose.model(
    'drinks',
    {
        wiskey: String,
        brandy: String,
        // manufacturnig_date: Date,
        country: String,
        year: Number,
        city: String,
       
        // awardsBuildig: [String]
    },
    'drinks'
);

const getAll = async () => {
    let drinks = await Drinks.find({});
    return drinks ;
 };

 const getOne = async (id) => {
     let drinks = await Drinks.findOne({_id: id});
     return drinks;
 };

 const create = async (data) => {
     let drink = new Drinks(data);
     await drink.save();
 };

 const update = async (id, data) => {
     await Drinks.updateOne({_id: id}, data);
 };

 const updatePartial = async (id, data) => {
     await Drinks.updateOne({_id: id }, data);
 };

 const remove = async (id) => {
     await Drinks.deleteOne({_id: id});
 };

 module.exports= {
     getAll,
     getOne,
     create,
     update,
     updatePartial,
     remove,

 };