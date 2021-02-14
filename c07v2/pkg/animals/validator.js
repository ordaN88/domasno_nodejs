const validator = require('node-input-validator');


const animalSchema = {
    name: 'required|minLength:4',
    family: 'required|minLength:2',
    continets: 'required', 
    carnivore: "requrerd",
    mamal: "required"

};


const animal = async (data, schema) => {
    let v = new validator.Validator(data, schema);
    let res = await v.check();
    if(!res) {
        throw v.errors;
    }
    return res;
};
module.exports = {
    animalSchema,
    animal
}