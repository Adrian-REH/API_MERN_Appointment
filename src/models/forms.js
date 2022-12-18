
const mongoose = require("mongoose");

const formsSchema= mongoose.Schema({
    data:{
        type: String,
    },
    medical:{
        type: String,
    },
    patient:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Forms',formsSchema);