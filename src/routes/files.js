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
    .then((data) => res.json(data))
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
//GET PROFESSIONAL
router.get("/files/professional/:professional", (req, res) => {
  const{professional} =req.params;
  filesSchema
    .findOne({professional:professional})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET CLIENT
router.get("/files/client/:client", (req, res) => {
  const{client} =req.params;
  filesSchema
    .findOne({client:client})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//UPDATE ID
router.put("/files/:id", (req, res) => {
  const{id} =req.params;
  const{laboratory,prescriptions,stadies,odontogram,client,professional}=req.body;
  filesSchema
    .updateOne({_id:id},{$set:{laboratory,prescriptions,stadies,odontogram,client,professional}})
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
