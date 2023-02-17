
const mongoose = require("mongoose");

const labSchema= mongoose.Schema({
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
    },
    hour_on:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Lab',labSchema);
