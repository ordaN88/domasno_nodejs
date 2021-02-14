const mongoose = require('mongoose');

const Cars = mongoose.model(
    'cars',
    {
        brand: String,
        model: String,
        // manufacturnig_date: Date,
        engine: String,
        mileage: Number,
        country: String,
        seats: Number,
        awards: [String]
    },
    'cars'
);

const getAll = async () => {
    let cars = await Cars.find({});
    return cars;
 };

 const getOne = async (id) => {
     let cars = await Cars.findOne({_id: id});
     return cars;
 };

 const create = async (data) => {
     let car = new Cars(data);
     await car.save();
 };

 const update = async (id, data) => {
     await Cars.updateOne({_id: id}, data);
 };

 const updatePartial = async (id, data) => {
     await Cars.updateOne({_id: id }, data);
 };

 const remove = async (id) => {
     await Cars.deleteOne({_id: id});
 };

 module.exports= {
     getAll,
     getOne,
     create,
     update,
     updatePartial,
     remove,

 };