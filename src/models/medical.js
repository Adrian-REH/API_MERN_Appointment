
const mongoose = require("mongoose");

const medicalSchema= mongoose.Schema({
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
    },
    tuition:{
        type: String,
        unique: true,
        trim: true
    },
    profession:{
        type: String,
        unique: true,
        trim: true
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Medical',medicalSchema);
