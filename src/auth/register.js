const bcrypt = require('bcrypt');
const {logUsers} = require('../log-users');
const {sendPrevData} = require('./send-prev-data');
const register = async (req,res)=>{
    // create entry for new user
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const user = {"user-name":req.body["user-name"],
        "password":hashedPassword,
        "phone":req.body["phone"],
        "email":req.body["email"],
        "age":req.body["age"],
        "time-stamp":req.body["time-stamp"] //should be overriden by data fetched from database
        }
        sendPrevData(user);
        logUsers(user,res);
        res.status(201).send("User created!");
    }catch(err){
        res.status(500).send("Internal error");
    }
}
module.exports = {register};