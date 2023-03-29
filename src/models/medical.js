
const mongoose = require("mongoose");

const profesionSchema= mongoose.Schema({
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
        type: String,
        unique: true,
        trim: true
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
    },
    img:{
        type: String
    },
    token_not:{
        type: String
    },
    hour_on:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Professional',profesionSchema);
