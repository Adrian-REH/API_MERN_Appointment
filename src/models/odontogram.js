
const mongoose = require("mongoose");

const odontogramSchema= mongoose.Schema({
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

module.exports = mongoose.model('Odontogram',odontogramSchema);