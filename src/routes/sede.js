const express = require('express');
const sedeSchema= require("../models/sede");
const router=express.Router();

//CREATE
router.post("/sede", (req, res) => {
    const sede = sedeSchema(req.body);
    sede
      .save()
      .then((data) => res.json({"result":data,"info":""}))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/sede", (req, res) => {
  
  sedeSchema
    .find()
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/sede/:id", (req, res) => {
  const{id} =req.params;
  sedeSchema
    .findById(id)
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});
//UPDATE ID
router.put("/sede/:id", (req, res) => {
  const{id} =req.params;
  const{name_sede,direction,laboratory}=req.body;
  sedeSchema
    .updateOne({_id:id},{$set:{name_sede,direction,laboratory}})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/sede/:id", (req, res) => {
  const{id} =req.params;
  sedeSchema
    .deleteOne({_id:id})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
