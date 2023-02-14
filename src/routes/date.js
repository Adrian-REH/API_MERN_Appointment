const express = require('express');
const dateSchema= require("../models/date");
const router=express.Router();

//CREATE
router.post("/date", (req, res) => {
    const date = dateSchema(req.body);
    date
      .save()
      .then((data) => res.json({"result":data,"info":""}))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/date", (req, res) => {
  
  dateSchema
    .find()
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/date/:id", (req, res) => {
  const{id} =req.params;
  dateSchema
    .find(id)
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});
//UPDATE ID
router.put("/date/:id", (req, res) => {
  const{id} =req.params;
  const{medical,lunes,martes,miercoles,jueves,viernes,sabado,domingo}=req.body;
  dateSchema
    .updateOne({_id:id},{$set:{medical,lunes,martes,miercoles,jueves,viernes,sabado,domingo}})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/date/:id", (req, res) => {
  const{id} =req.params;
  dateSchema
    .deleteOne({_id:id})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
