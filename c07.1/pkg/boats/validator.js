const validator = require('node-input-validator');


const boatSchema = {
model: 'required|minLength:4',
race: 'required|minLength:2',
team: 'required', 

};

const createAccountSchema = {
    email: 'required|email',
    password: 'required',
    password2: 'required'
    
    };

const loginSchema = {
        email: 'required|email',
        password: 'required',
       
        
        };  


const boat = async (data, schema) => {
    let v = new validator.Validator(data, schema);
    let res = await v.check();
    if(!res) {
        throw v.errors;
    }
    return res;
};
module.exports = {
    boatSchema,
    createAccountSchema,
    loginSchema,
    boat,
};