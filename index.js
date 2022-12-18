const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutesAPPOINTMENT=require('./src/routes/appointment')
const userRoutesCLIENT=require('./src/routes/client')
const userRoutesFAVS=require('./src/routes/favs')
const userRoutesFILE=require('./src/routes/files')
const userRoutesFORMS=require('./src/routes/forms')
const userRoutesODONTOGRAM=require('./src/routes/odontogram')
const userRoutesOFFERS=require('./src/routes/offers')
const userRoutesPROFESSIONAL=require('./src/routes/professional')
const userRoutesSPECIALTY=require('./src/routes/specialty')

//Settings
const app= express();
const port=process.env.PORT ||9000;

// moddleware
app.use(express.json());
app.use('/api',userRoutesAPPOINTMENT)
app.use('/api',userRoutesCLIENT)
app.use('/api',userRoutesFAVS)
app.use('/api',userRoutesFILE)
app.use('/api',userRoutesFORMS)
app.use('/api',userRoutesODONTOGRAM)
app.use('/api',userRoutesOFFERS)
app.use('/api',userRoutesPROFESSIONAL)
app.use('/api',userRoutesSPECIALTY)

//routes
app.get('/',(req,res)=>{
    res.send('Welcom to my API');
});


//MongoDB Conection
mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('connected to MongoDV Atlas'))
    .catch((error)=> console.error(error))

app.listen(port,()=> console.log('server listening on port', port))

