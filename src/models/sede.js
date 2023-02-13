
const mongoose = require("mongoose");

const sedeSchema= mongoose.Schema({
    name_sede:{
        type: String
    },
    direction:{
        type: String
    },
    laboratory:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Sede', sedeSchema);