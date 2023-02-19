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
 })

exports.upload = upload.single('myFile')

exports.uploadFile = (req, res) => {
    res.send( req.file )
}
