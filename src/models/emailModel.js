const mongoose = require("mongoose");

const EmailSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    from:{
        type: String,
        required : true,
        unique : true
    },
    to:{
        type: String,
        required : true,
        unique : true
    },  from:{
        type: String,
        required : true,
        unique : true
    },
    subject:{
        type: String,
        required : true,
        unique : true
    }

}, {Timestamp : true});

const Email = mongoose.model("Email", EmailSchema);
exports.module ={Email}