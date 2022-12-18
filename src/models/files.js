
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
    patient:{
        type: String
    },   
    medical:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Files',filesSchema);