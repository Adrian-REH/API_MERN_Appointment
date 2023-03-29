const express = require('express');
const clientSchema= require("../models/patient");
const router=express.Router();

//CREATE
router.post("/patient", (req, res) => {
  const client = clientSchema(req.body);
    client.find({email:req.body.email}), (err, userWithSameEmail) => {
      if (err) {
        res.status(400).json({
          message: 'Error getting email try gain',
        });
      } else if (userWithSameEmail) {
        res.status(400).json({ message: 'This email is taken' });
      } else {
        client
        .save()
        .then((data) => res.json({"result":data,"info":""}))
        .catch((error) => res.json({ message: error }));
  
      }}
  });
//GET ALL
router.get("/patient", (req, res) => {
  
  clientSchema
    .find()
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});


//GET GMAIL
router.get("/patient/email/:email", (req, res) => {
  const{email} =req.params;
  clientSchema
    .find({email:email})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});
//GET ID
router.get("/patient/:id", (req, res) => {
  const{id} =req.params;
  clientSchema
    .findById(id)
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//UPDATE ID
router.put("/patient/:id", (req, res) => {
  const{id} =req.params;
  const{name_last,dni,phone,email,direction,img, token_not}=req.body;
  clientSchema
    .updateOne({_id:id},{$set:{name_last,dni,phone,email,direction,img,token_not}})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/patient/:id", (req, res) => {
  const{id} =req.params;
  clientSchema
    .deleteOne({_id:id})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
