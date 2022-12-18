
const mongoose = require("mongoose");

const favsSchema= mongoose.Schema({
    professional:{
        type: String
    },
    client:{
        type: String
    }
},{
    timestamps:true,
    versionKey: false
});

module.exports = mongoose.model('Favs',favsSchema);