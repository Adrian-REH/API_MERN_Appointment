const express = require('express');
const labSchema= require("../models/laboratory");
const router=express.Router();


//CREATE
router.post("/laboratory", (req, res) => {
    const lab = labSchema(req.body);
    lab
      .save()
      .then((data) => res.json({"result":data,"info":""}))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/laboratory", (req, res) => {
  
  labSchema
    .find()
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/laboratory/:id", (req, res) => {
  const{id} =req.params;
  labSchema
    .findById(id)
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//UPDATE ID
router.put("/laboratory/:id", (req, res) => {
  const{id} =req.params;
  const{name_lab,phone,sedes,telefono,correo,acreditado,hour_on}=req.body;
  labSchema
    .updateOne({_id:id},{$set:{name_lab,phone,sedes,telefono,correo,acreditado,hour_on}})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//DELETE IDs
router.delete("/laboratory/:id", (req, res) => {
  const{id} =req.params;
  labSchema
    .deleteOne({_id:id})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
