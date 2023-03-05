
const mongoose = require("mongoose");

const odontogramSchema= mongoose.Schema({
    data:[
        {
            number: String,
            imgTop: String,
            imgBot: String,
        }
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
