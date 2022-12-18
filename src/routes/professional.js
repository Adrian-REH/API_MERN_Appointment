const express = require('express');
const profesionSchema= require("../models/professional");
const router=express.Router();



//READ
//UPDATE
//DELETE



//CREATE
router.post("/professional", (req, res) => {
    const professional = profesionSchema(req.body);
    professional
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/professional", (req, res) => {
  
  profesionSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/professional/:id", (req, res) => {
  const{id} =req.params;
  profesionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//UPDATE ID
router.put("/professional/:id", (req, res) => {
  const{id} =req.params;
  const{name_last,dni,phone,email,direction,tuition}=req.body;
  profesionSchema
    .updateOne({_id:id},{$set:{name_last,dni,email,direction,tuition}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/professional/:id", (req, res) => {
  const{id} =req.params;
  profesionSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
