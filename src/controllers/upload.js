const multer = require('multer')
const uuid = require('uuid').v4;
const path=require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase())
    }
})

const upload = multer({ 
    storage: storage,
    fileFilter:(req,file,cb)=>{
        const filetypes=/jpeg|jpg|pdf|gif|png/;
        const mimetype=filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null,true);
        }
        cb("Error: Archivo debe ser una pdf o Imagen valida")
    } })

exports.upload = upload.single('myFile')

exports.uploadFile = (req, res) => {
    res.send( req.file )
}
