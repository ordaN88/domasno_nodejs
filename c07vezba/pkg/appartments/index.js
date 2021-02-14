const mongoose = require('mongoose');

const Appartments = mongoose.model(
    'appartments',
    {
        floor: Number,
        rooms: Number,
        // manufacturnig_date: Date,
        elevator: Boolean,
        parkig_space: Number,
        country: String,
        // location: {
        //     city: String,
        //     country: String,
        //     zip_code: String
        // }
        // city: String,
        // awardsBuildig: [String]
    },
    'appartments'
);

const getAll = async () => {
    let appartments = await Appartments.find({});
    return appartments ;
 };

 const getOne = async (id) => {
     let appartments = await Appartments.findOne({_id: id});
     return appartments;
 };

 const create = async (data) => {
     let appartment = new Appartments(data);
     await appartment.save();
 };

 const update = async (id, data) => {
     await Appartments.updateOne({_id: id}, data);
 };

 const updatePartial = async (id, data) => {
     await Appartments.updateOne({_id: id}, data);
 };

 const remove = async (id) => {
     await Appartments.deleteOne({_id: id});
 };

 module.exports = {
     getAll,
     getOne,
     create,
     update,
     updatePartial,
     remove,

 };