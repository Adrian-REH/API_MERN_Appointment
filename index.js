const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutesAPPOINTMENT=require('./src/routes/appointment')
const userRoutesPATIENT=require('./src/routes/patient')
const userRoutesFAVS=require('./src/routes/favs')
const userRoutesFILE=require('./src/routes/files')
const userRoutesFORMS=require('./src/routes/forms')
const userRoutesODONTOGRAM=require('./src/routes/odontogram')
const userRoutesOFFERS=require('./src/routes/offers')
const userRoutesMEDICAL=require('./src/routes/medical')
const userRoutesSPECIALTY=require('./src/routes/specialty')
const userRoutesUPLOAD=require('./src/routes/upload')
const userRoutesREGISTER=require('./src/routes/register')

//Settings
const app= express();
const port=process.env.PORT ||9000;

// moddleware
app.use(express.json());
app.use('/api',userRoutesAPPOINTMENT)
app.use('/api',userRoutesPATIENT)
app.use('/api',userRoutesFAVS)
app.use('/api',userRoutesFILE)
app.use('/api',userRoutesFORMS)
app.use('/api',userRoutesODONTOGRAM)
app.use('/api',userRoutesOFFERS)
app.use('/api',userRoutesMEDICAL)
app.use('/api',userRoutesSPECIALTY)
app.use('/api',userRoutesUPLOAD)
app.use('/api',userRoutesREGISTER)

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

