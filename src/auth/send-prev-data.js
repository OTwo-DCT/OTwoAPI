const redis = require('redis');
const redisPort = process.env.REDISPORT || 6379;
const client = redis.createClient(redisPort);
const sendPrevData = (user)=>{
    // const PHONE = req.body["phone"];
        // const token = "user_"+PHONE+":phone";
        // client.get(token,(err,data)=>{
        //     if(err) res.status(500).send();
        //     if(PHONE === data){ // check redis for the existence of data
        //         req["next"] = user;
        //         next();
        //     }
        // });
}
module.exports = {sendPrevData};