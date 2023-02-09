const express = require('express');
const clientSchema= require("../models/patient");
const router=express.Router();

//CREATE
router.post("/patient", (req, res) => {
    const patient = clientSchema(req.body);
    patient
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
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
  const{name_last,dni,phone,email,direction}=req.body;
  clientSchema
    .updateOne({_id:id},{$set:{name_last,dni,email,direction}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/patient/:id", (req, res) => {
  const{id} =req.params;
  clientSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
