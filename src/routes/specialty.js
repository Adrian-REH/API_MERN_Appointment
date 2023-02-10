const express = require('express');
const specialtySchema= require("../models/specialty");
const router=express.Router();

//CREATE
router.post("/specialty", (req, res) => {
    const specialty = specialtySchema(req.body);
    specialty
      .save()
    .then((data) => res.json({"result":data,"info":""}))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/specialty", (req, res) => {
  
  specialtySchema
    .find()
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/specialty/:id", (req, res) => {
  const{id} =req.params;
  specialtySchema
    .findById(id)
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//UPDATE ID
router.put("/specialty/:id", (req, res) => {
  const{id} =req.params;
  const{title,comment,medical,offer,price}=req.body;
  specialtySchema
    .updateOne({_id:id},{$set:{title,comment,medical,offer,price}})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/specialty/:id", (req, res) => {
  const{id} =req.params;
  specialtySchema
    .deleteOne({_id:id})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
