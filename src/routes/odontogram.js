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
//GET PROFESSIONAL
router.get("/odontogram/professional/:professional", (req, res) => {
  const{professional} =req.params;
  odontogramSchema
    .findOne({professional:professional})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET CLIENT
router.get("/odontogram/client/:client", (req, res) => {
  const{client} =req.params;
  odontogramSchema
    .findOne({client:client})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//UPDATE ID
router.put("/odontogram/:id", (req, res) => {
  const{id} =req.params;
  const{data,client,professional}=req.body;
  odontogramSchema
    .updateOne({_id:id},{$set:{data,client,professional}})
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
