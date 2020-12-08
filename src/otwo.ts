import express, { NextFunction } from 'express';
import { config } from 'dotenv';
const bodyParser = require('body-parser');
const redis = require('redis');
const {logUsers} = require('./log-users');
const {login} = require('./auth/login');
const {register} = require("./auth/register");
const l = console.log;
const app = express();
config();
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
    res.send('<h1>Entry Point<h1>').status(200);
});

app.post("/user/routine/",(req,res)=>{
    l(req.body);
    l("Daily data from user received");
});

//  depricated
app.post('/user/new/',logUsers,(req,res)=>{
    res.send('New request received...').status(200);
});

app.post('/user/register/',register);

app.post('/user/login/',login);

app.get('/user/infected/',(req,res)=>{
    l(req.method);
    l(req.body);
    res.send('User is infected').status(200);
});

// const redisPort = process.env.REDISPORT || 6379;
// const client = redis.createClient(redisPort);
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
