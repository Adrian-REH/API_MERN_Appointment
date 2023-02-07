
const mongoose = require("mongoose");

const registerSchema= mongoose.Schema({
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

module.exports = mongoose.model('Register', registerSchema);
