const express = require('express');
const favsSchema= require("../models/favs");
const router=express.Router();


//CREATE
router.post("/favs", (req, res) => {
    const favs = favsSchema(req.body);
    favs
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/favs", (req, res) => {
  
  favsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/favs/:id", (req, res) => {
  const{id} =req.params;
  favsSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET PROFESSIONAL
router.get("/favs/professional/:professional", (req, res) => {
  const{professional} =req.params;
  favsSchema
    .findOne({professional:professional})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET CLIENT
router.get("/favs/client/:client", (req, res) => {
  const{client} =req.params;
  favsSchema
    .findOne({client:client})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//UPDATE ID
router.put("/favs/:id", (req, res) => {
  const{id} =req.params;
  const{professional,client}=req.body;
  favsSchema
    .updateOne({_id:id},{$set:{professional,client}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/favs/:id", (req, res) => {
  const{id} =req.params;
  favsSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
