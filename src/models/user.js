const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    "user-name": {
        type: String,
        required: true,
        trim: true
    },
    "email": {
        type: String,
        required: false,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid!')
            }
        }
    },
    // age consent of the app is currently not set, default age is 25, minimum is 13
    "age": {
        type: Number,
        default: 25,
        validate(value){
            if(value<13){
                throw new Error('User must be atleast 13')
            }
        }
    },
    "password": { // passwords are not stored as plain text, hashed passwords are not validated
        type: String,
        required: true,
        trim: true,
        // validate(value){
        //     if(value.includes('password')){
        //         throw new Error('Password contains commonly used phrase(s)')
        //     }
        // }
    },
    "phone": {
        type: String,
        required: true,
        minlength:10,
        maxlength:10
        
    },
    // "time-stamp": {
    //     type: String,
    //     required: true,
    //     trim: true
    // }
    "time-stamp":{
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model('User', userSchema);
module.exports = User;