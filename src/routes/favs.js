const express = require('express');
const favsSchema= require("../models/favs");
const router=express.Router();
//CREATE


  router.post("/favs", (req, res) => {
    const favs=favsSchema(req.body);
    const{medical,patient}=req.params;
  
    favsSchema
    .find({}, { projection: { medical: medical, patient: patient } })
    .then(data => {if(data.length==0){
      favs
      .save()
      .then(data => res.json({"result":data,"info":"Se creo el fav"}))
      .catch((error) => res.json({ message: error}));
    }}).catch(error => res.json({ message: error}));
    });
//GET ALL
router.get("/favs", (req, res) => {
  
  favsSchema
    .find()
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/favs/:id", (req, res) => {
  const{id} =req.params;
  favsSchema
    .findById(id)
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});
//GET MEDICAL
router.get("/favs/medical/:medical", (req, res) => {
  const{medical} =req.params;
  favsSchema
    .find({medical:medical})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});
//GET PATIENT
router.get("/favs/patient/:patient", (req, res) => {
  const{patient} =req.params;
  favsSchema
    .find({patient:patient})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});
//UPDATE ID
router.put("/favs/:id", (req, res) => {
  const{id} =req.params;
  const{medical,patient}=req.body;
  favsSchema
    .updateOne({_id:id},{$set:{medical,patient}})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/favs/:id", (req, res) => {
  const{id} =req.params;
  favsSchema
    .deleteOne({_id:id})
    .then((data) => res.json({"result":data,"info":""}))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
