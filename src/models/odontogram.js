
const mongoose = require("mongoose");

const odontogramSchema= mongoose.Schema({
    data:[
        
             String
        
    ],
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

module.exports = mongoose.model('Odontogram',odontogramSchema);
