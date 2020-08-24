const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name : {
        type :String,
        lowercase : true
    },
    id : {
        type: Number
    },
    phoneNo : {
        type : Number
    },
    email : {
        type : String,
        unique : true
    },
    createdAt : {
        type: Date,
        default : Date.now()
    }
});

const User = mongoose.model('User' ,user );

module.exports = User
