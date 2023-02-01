const express = require('express');
const appointmentSchema= require("../models/appointment");
const router=express.Router();

//CREATE
router.post("/appointment", (req, res) => {
    const appointment = appointmentSchema(req.body);
    appointment
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/appointment", (req, res) => {
  
  appointmentSchema
    .find()
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/appointment/:id", (req, res) => {
  const{id} =req.params;
  appointmentSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET PROFESSIONAL
router.get("/appointment/medical/:medical", (req, res) => {
  const{medical} =req.params;
  appointmentSchema
    .findOne({medical:medical})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET CLIENT
router.get("/appointment/patient/:patient", (req, res) => {
  const{patient} =req.params;
  appointmentSchema
    .findOne({patient:patient})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET FILES
router.get("/appointment/files/:files", (req, res) => {
  const{files} =req.params;
  appointmentSchema
    .findOne({files:files})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//UPDATE ID
router.put("/appointment/:id", (req, res) => {
  const{id} =req.params;
  const{fecha,hora,coment,specialty,patient,medical,profession,files,price}=req.body;
  appointmentSchema
    .updateOne({_id:id},{$set:{fecha,hora,coment,specialty,patient,medical,profession,files,price}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/appointment/:id", (req, res) => {
  const{id} =req.params;
  appointmentSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
