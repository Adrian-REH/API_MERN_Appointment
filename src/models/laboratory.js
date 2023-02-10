
const mongoose = require("mongoose");

const labSchema= mongoose.Schema({
    specialty:{
        type: String
    },
    name_lab:{
        type: String
    },
    sedes:{
        type: String
    },
    telefono:{
        type: String
    },
    correo:{
        type: String
    },
    acreditado:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Lab',labSchema);