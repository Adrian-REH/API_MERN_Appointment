const express = require('express');
const registerSchema= require("../models/register");
const router=express.Router();


//CREATE
router.post("/register", (req, res) => {
    const favs = registerSchema(req.body);
    favs
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/register", (req, res) => {
  
  registerSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/register/:id", (req, res) => {
  const{id} =req.params;
  registerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET MEDICAL
router.get("/register/medical/:medical", (req, res) => {
  const{medical} =req.params;
  registerSchema
    .findOne({medical:medical})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET PATIENT
router.get("/register/patient/:patient", (req, res) => {
  const{patient} =req.params;
  registerSchema
    .findOne({patient:patient})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//UPDATE ID
router.put("/register/:id", (req, res) => {
  const{id} =req.params;
  const{medical,patient}=req.body;
  registerSchema
    .updateOne({_id:id},{$set:{medical,patient}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/register/:id", (req, res) => {
  const{id} =req.params;
  registerSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
