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
//GET PROFESSIONAL
router.get("/forms/professional/:professional", (req, res) => {
  const{professional} =req.params;
  formsSchema
    .findOne({professional:professional})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET CLIENT
router.get("/forms/client/:client", (req, res) => {
  const{client} =req.params;
  formsSchema
    .findOne({client:client})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//UPDATE ID
router.put("/forms/:id", (req, res) => {
  const{id} =req.params;
  const{data,professional,client}=req.body;
  formsSchema
    .updateOne({_id:id},{$set:{data,professional,client}})
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
