const express = require('express');
const clientSchema= require("../models/client");
const router=express.Router();

//CREATE
router.post("/client", (req, res) => {
    const client = clientSchema(req.body);
    client
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/client", (req, res) => {
  
  clientSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/client/:id", (req, res) => {
  const{id} =req.params;
  clientSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//UPDATE ID
router.put("/client/:id", (req, res) => {
  const{id} =req.params;
  const{name_last,dni,phone,email,direction}=req.body;
  clientSchema
    .updateOne({_id:id},{$set:{name_last,dni,email,direction}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/client/:id", (req, res) => {
  const{id} =req.params;
  clientSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
