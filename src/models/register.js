
const mongoose = require("mongoose");

const favsSchema= mongoose.Schema({
    medical:{
        type: String
    },
    pattient:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Favs',favsSchema);