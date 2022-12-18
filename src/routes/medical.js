const express = require('express');
const profesionSchema= require("../models/medical");
const router=express.Router();



//READ
//UPDATE
//DELETE



//CREATE
router.post("/medical", (req, res) => {
    const medical = medicalSchema(req.body);
    medical
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/medical", (req, res) => {
  
  medicalSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/medical/:id", (req, res) => {
  const{id} =req.params;
  medicalSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//UPDATE ID
router.put("/medical/:id", (req, res) => {
  const{id} =req.params;
  const{name_last,dni,phone,email,direction,tuition,profession}=req.body;
  profesionSchema
    .updateOne({_id:id},{$set:{name_last,dni,email,direction,tuition,profession}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/medical/:id", (req, res) => {
  const{id} =req.params;
  medicalSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
