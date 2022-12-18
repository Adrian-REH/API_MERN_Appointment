const express = require('express');
const offersSchema= require("../models/offers");
const router=express.Router();

//CREATE
router.post("/offers", (req, res) => {
    const offers = offersSchema(req.body);
    offers
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
//GET ALL
router.get("/offers", (req, res) => {
  
  offersSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET ID
router.get("/offers/:id", (req, res) => {
  const{id} =req.params;
  offersSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//GET MEDICAL
router.get("/offers/medical/:medical", (req, res) => {
  const{medical} =req.params;
  offersSchema
    .findOne({medical:medical})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//UPDATE ID
router.put("/offers/:id", (req, res) => {
  const{id} =req.params;
  const{medical,code,fecha,percentage,title,specialty}=req.body;
  offersSchema
    .updateOne({_id:id},{$set:{medical,code,fecha,percentage,title,specialty}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//DELETE ID
router.delete("/offers/:id", (req, res) => {
  const{id} =req.params;
  offersSchema
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports= router;
