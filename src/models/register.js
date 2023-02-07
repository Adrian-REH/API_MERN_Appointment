
const mongoose = require("mongoose");

const registerSchema= mongoose.Schema({
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

module.exports = mongoose.model('Register', registerSchema);