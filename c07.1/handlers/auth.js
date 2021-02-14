const boatData = require('../pkg/boats'); 
const { boat, createAccountSchema, loginSchema } = require('../pkg/boats/validator');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const cfg = require ('../pkg/config')

const createAccount = async (req, res) => {
    try{
        await boat(req.body, createAccountSchema);
        if(req.body.password !== req.body.password2) {
            return res.status(400).send('Bad request. Password Missmatch');
        }

        let b = await boatData.getOneByEmail(req.body.email);
        if(b) {
            return res.status(400).send('Bad Request . Boat Exists')
        }
        req.body.password = bcrypt.hashSync(req.body.password);

        let data = await boatData.create(req.body);
        return res.status(201).send('Created');
    }catch(err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
    }
};

const login = async (req, res) => {
 try{
     await boat(req.body, loginSchema);
     
     let b = await boatData.getOneByEmail(req.body.email);
     if(!b) {
         return res.status(404).send('Bad Request');
     }
     if(!bcrypt.compareSync(req.body.password, b.password)) { //sporeduvanje na pass od logiranje so pass od createAccount, znaci nema napraeno Account 
         return res.status(401).send('Unauthorized');
     }

     let payload = {
         uid: b._id,
         email: b.email,
         exp: (new Date().getTime() + (365 * 24 * 60 * 60 *1000)) / 1000
     };

     let token = jwt.sign(payload, cfg.get('server').jwt_key);

     res.status(200).send({jwt: token});
    
    
    }catch (err) {
     console.log(err);
     res.status(500).send('Internal Server Error');

 }
};


const refreshToken = (req, res) => {
    let payload = {
        uid: req.user.uid,
        email: req.user.email,
        exp: (new Date().getTime() + (365 * 24 * 60 * 60 *1000)) / 1000
    };

    let token = jwt.sign(payload, cfg.get('server').jwt_key);

    res.status(200).send({jwt: token});
}


module.exports = {
    createAccount,
    login,
    refreshToken,
};