
const mongoose = require("mongoose");

const clientSchema= mongoose.Schema({
    name_last:{
        type: String,
        required: true
    },
    dni:{
        type: String,
        required: true
    },
    phone:{
        type: String
    },
    email:{
        type: String
    },
    direction:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Client',clientSchema);