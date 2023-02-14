
const mongoose = require("mongoose");

const dateSchema= mongoose.Schema({
    medical:{
        type: String
    },
    lunes:{
        type: String
    },
    martes:{
        type: String
    },
    miercoles:{
        type: String
    },
    jueves:{
        type: String
    },
    viernes:{
        type: String
    },
    sabado:{
        type: String
    },
    domingo:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Date', dateSchema);