
const mongoose = require("mongoose");

const offersSchema= mongoose.Schema({
    medical:{
        type: String,
    },
    code:{
        type: String,
    },
    fecha:{
        type: String
    },
    percentage:{
        type: String
    },
    title:{
        type: String
    },
    specialty:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Offers',offersSchema);