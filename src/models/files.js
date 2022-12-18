
const mongoose = require("mongoose");

const filesSchema= mongoose.Schema({
    laboratory:{
        type: String,
    },
    prescriptions:{
        type: String
    },
    stadies:{
        type: String
    },
    odontogram:{
        type: String
    },
    client:{
        type: String
    },   
    professional:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Files',filesSchema);