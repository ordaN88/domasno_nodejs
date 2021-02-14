const mongoose = require ('mongoose');

const Boats = mongoose.model (
    'boats',
    {
        model: String,
        race: String,
        team: String,
        password: String,
        email: String
    },
    'boats'
);


const getAll = async () => {
    let boats = await Boats.find({});
    return boats;
}

const getOne = async (id) => {
    let boats = await Boats.findOne({_id: id});
    return boats;
};
const getOneByEmail = async (email) => {
    let boats = await Boats.findOne({email});
    return boats;
};

const create = async (data) => {
    let boat = new Boats(data);
    await boat.save();
};

const update = async (id, data) => {
    await Boats.updateOne({_id: id}, data);
};

const updatePartial = async (id, data) => {
    await Boats.updateOne({_id: id}, data);
};

const remove = async (id) => {
    await Boats.deleteOne({_id: id});
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
    getOneByEmail,
};