
const mongoose = require("mongoose");

const odontogramSchema= mongoose.Schema({
    data:[
        {
            number: {
                type: String,
            },
            imgTop: {
                type: String,
            },
            imgBot: {
                type: String,
            },
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
