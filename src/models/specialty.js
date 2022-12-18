
const mongoose = require("mongoose");

const specialtySchema= mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    professional:{
        type: String
    },
    offer:{
        type: String
    },
    price:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Specialty',specialtySchema);