const express = require('express');
const profesionSchema= require("../models/medical");
const router=express.Router();


//CREATE
router.post("/medical", (req, res) => {
    const medical = profesionSchema(req.body);
    medical.find({email:req.body.email}), (err, userWithSameEmail) => {
      if (err) {
        res.status(400).json({
          message: 'Error getting email try gain',
        });
      } else if (userWithSameEmail) {
        res.status(400).json({ message: 'This email is taken' });
      } else {
        medical
        .save()
        .then((data) => res.json({"result":data,"info":""}))
        .catch((error) => res.json({ message: error }));
  
      }
    }
  });
//GET ALL
router.get("/medical", (req, res) => {
  
  profesionSchema
    .find()
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});
//GET GMAIL
router.get("/medical/email/:email", (req, res) => {
  const{email} =req.params;
  profesionSchema
    .find({email:email})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});
//GET ID
router.get("/medical/:id", (req, res) => {
  const{id} =req.params;
  profesionSchema
    .findById(id)
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//UPDATES ID 
router.put("/medical/:id", (req, res) => {
  const{id} =req.params;
  const{name_last,dni,phone,email,direction,tuition,profession,img,token_not,hour_on}=req.body;
  profesionSchema
    .updateOne({_id:id},{$set:{name_last,dni,phone,email,direction,tuition,profession,img,token_not,hour_on}})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/medical/:id", (req, res) => {
  const{id} =req.params;
  profesionSchema
    .deleteOne({_id:id})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
