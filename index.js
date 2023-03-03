const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require("body-parser")
const path=require('path');
const http = require("http");
const url = require("url");

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
const userRoutesLABS=require('./src/routes/laboratory')
const userRoutesSEDE=require('./src/routes/sede')
const userRoutesDATE=require('./src/routes/date')
const rf=require('./PoliticaPrivacida')

//Settings
const app= express();
const port=process.env.PORT ||9000;
app.use(bodyParser.urlencoded({extended:false}))
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
app.use('/api',userRoutesLABS)
app.use('/api',userRoutesSEDE)
app.use('/api',userRoutesDATE)
app.use(express.static(path.join(__dirname,'uploads')))

//routes
app.get('/',(req,res)=>{
    res.send(userRoutesPP);
});
const server = http.createServer((req, res) => {
    statusCode = 200;
    contentType =  {'Content-Type': 'text/html'};
    let t = rf.read_file("text.html");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(t);
    res.end();
});

//MongoDB Conection
mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('connected to MongoDV Atlas'))
    .catch((error)=> console.error(error))

app.listen(port,()=> console.log('server listening on port', port))

