
const mongoose = require("mongoose");

const appointmentSchema= mongoose.Schema({
    fecha:{
        type: String,
        required: true
    },
    hora:{
        type: String,
        required: true
    },
    coment:{
        type: String
    },
    specialty:{
        type: String
    },
    patient:{
        type: String,

    },
    medical:{
        type: String,

    },
    profession:{
        type: String,

    },
    files:{
        type: String,

    },
    price:{
        type: String,

    }
},{
    timestamps:true,
    versionKey: false
}
);

module.exports = mongoose.model('Appointment',appointmentSchema);