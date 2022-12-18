
const mongoose = require("mongoose");

const formsSchema= mongoose.Schema({
    data:{
        type: String,
    },
    professional:{
        type: String,
    },
    client:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Forms',formsSchema);