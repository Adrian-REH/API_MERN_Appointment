const express = require('express');
const odontogramSchema= require("../models/odontogram");
const router=express.Router();

//CREATE
router.post("/odontogram", (req, res) => {
    const odontogram = odontogramSchema(req.body);
    odontogram
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/odontogram", (req, res) => {
  
  odontogramSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//GET ID
router.get("/odontogram/:id", (req, res) => {
  const{id} =req.params;
  odontogramSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET MEDICAL
router.get("/odontogram/medical/:medical", (req, res) => {
  const{medical} =req.params;
  odontogramSchema
    .findOne({medical:medical})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET PATIENT
router.get("/odontogram/patient/:patient", (req, res) => {
  const{patient} =req.params;
  odontogramSchema
    .findOne({patient:patient})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//UPDATE ID
router.put("/odontogram/:id", (req, res) => {
  const{id} =req.params;
  const{data,patient,medical}=req.body;
  odontogramSchema
    .updateOne({_id:id},{$set:{data,patient,medical}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/odontogram/:id", (req, res) => {
  const{id} =req.params;
  odontogramSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
