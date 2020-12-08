const mongoose = require('./db/mongoose');
const User = require('./models/user');
const redis = require('redis');
const redisPort = process.env.REDISPORT || 6379;
const client = redis.createClient(redisPort);
const logUsers = async (user,res)=>{
    try{
        //TEMPORARY

        // USER.save().then(()=>{
        //     console.log("User created!");
        // }).catch((error)=>{
        //     console.log("User creation failed!", error);
        //     res.status(400).send("Bad request");
        // });
        const newUser = new User(user);
        await newUser.save();
        console.log("user created succesfully");
        // const key_str = "user_"+user["phone"]+":";
        // client.mset(key_str+"name", user["user-name"],
        //                 key_str+"password",user["password"],
        //                 key_str+"phone",user["phone"],
        //                 key_str+"email",user["email"],
        //                 key_str+"time-stamp",user["time-stamp"],);
    }catch(err){
        console.log(err);
        res.status(500).send();
    }
}
module.exports = {logUsers};