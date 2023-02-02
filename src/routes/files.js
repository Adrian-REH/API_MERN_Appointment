const express = require('express');
const filesSchema= require("../models/files");
const router=express.Router();

//CREATE
router.post("/files", (req, res) => {
    const files = filesSchema(req.body);
    files
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/files", (req, res) => {
  
  filesSchema
    .find()
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/files/:id", (req, res) => {
  const{id} =req.params;
  filesSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET MEDICAL
router.get("/files/medical/:medical", (req, res) => {
  const{medical} =req.params;
  filesSchema
    .find({medical:medical})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});
//GET PATIENT
router.get("/files/patient/:patient", (req, res) => {
  const{patient} =req.params;
  filesSchema
    .find({patient:patient})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//UPDATE ID
router.put("/files/:id", (req, res) => {
  const{id} =req.params;
  const{laboratory,prescriptions,stadies,odontogram,patient,medical}=req.body;
  filesSchema
    .updateOne({_id:id},{$set:{laboratory,prescriptions,stadies,odontogram,patient,medical}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/files/:id", (req, res) => {
  const{id} =req.params;
  filesSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
