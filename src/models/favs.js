
const mongoose = require("mongoose");

const favsSchema= mongoose.Schema({
    medical:{
        type: String
    },
    patient:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Favs',favsSchema);
