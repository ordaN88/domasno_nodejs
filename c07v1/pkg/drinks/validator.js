const validator = require('node-input-validator');


const drinkSchema = {
model: 'required|minLength:4',
brand: 'required|minLength:2',
team: 'required', 

};


const drink = async (data, schema) => {
    let v = new validator.Validator(data, schema);
    let res = await v.check();
    if(!res) {
        throw v.errors;
    }
    return res;
};
module.exports = {
    drinkSchema,
    drink
}