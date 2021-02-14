const mongoose = require('mongoose');

const Appartments = mongoose.model(
    "appartments",

  {
    flour: String,
    rooms: String,
    // manufacturnig_date: Date,
    elevator: String,
    parkig_space: Number,
    country: String,
    city: Number,
    // awardsBuildig: [String]

  },
  "appartments"
);

const getAll = async () => {
    let appatments = await Appartments.find({});
    return appatments;
}
const getOne = async (id) => {
    let appartments = await Appartments.findOne({_id: id});
    return appartments;
};

const create = async () => {
    let appartment = new Appartments(data);
    await appartment.save();
};

const update = async (id, data) => {
    await Appartments.updateOne({_id: id}, data)
};

const updatePartial = async (id, data) => {
    await Appartments.updateOne({_id: id}, data)
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