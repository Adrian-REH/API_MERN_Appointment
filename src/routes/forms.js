const express = require('express');
const formsSchema= require("../models/forms");
const router=express.Router();

//CREATE
router.post("/forms", (req, res) => {
    const forms = formsSchema(req.body);
    forms
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/forms", (req, res) => {
  
  formsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/forms/:id", (req, res) => {
  const{id} =req.params;
  formsSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET MEIDCAL
router.get("/forms/medical/:medical", (req, res) => {
  const{medical} =req.params;
  formsSchema
    .findOne({medical:medical})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET PATIENT
router.get("/forms/patient/:patient", (req, res) => {
  const{patient} =req.params;
  formsSchema
    .findOne({patient:patient})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//UPDATE ID
router.put("/forms/:id", (req, res) => {
  const{id} =req.params;
  const{data,medical,patient}=req.body;
  formsSchema
    .updateOne({_id:id},{$set:{data,medical,patient}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/forms/:id", (req, res) => {
  const{id} =req.params;
  formsSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
