const  users  = require('../users/users');


exports.getUsuarios =  (req , res) =>{
    res.send(users);
};