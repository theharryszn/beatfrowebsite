const express = require('express');
const artiste = require('../database/artistes');
const router = express.Router();


// get all artistes
 router.get('/', (req, res) => {
    artiste.find({}, (err,doc)=> {
        res.json(doc);
    })
 });
// get all artistes
 router.get('/some', (req, res) => {
    artiste.find({}, (err,doc)=> {
        res.json(doc.slice(0,8));
    })
 });




 //get single artiste
 router.get('/:id', (req, res) => {
     artiste.findById(req.params.id,(err,doc) =>{
         if(doc === undefined){
            res.status(400).json({ msg: `This track track:${req.params.id} does not exist`});
         }else{
             res.json(doc);
         }
     })
 })


 //delete single artriste
 router.delete('/delete/:id', (req, res) => {
    artiste.findByIdAndDelete(req.params.id, (err,doc) => {
        if(doc === undefined){
            res.status(400).json({ msg: `This track track:${req.params.id} does not exist`});
        }else{
             res.json({success:true});
        }
    })
 });

 //add artiste
 router.post('/', (req, res) => {
    const newArtiste = 
        {
            _id: req.body._id,
            stageName: req.body.stageName,
            isVerified: req.body.isVerified,
            dateAdded: new Date()
        }
   artiste.insertMany([newArtiste], (err, docs) => {
      if(docs === undefined){
           res.json(err);
      }else{
        res.json({success:true});
      }
    })

 });


// update track
// router.put('/:id', (req, res) => {
//     const updatedTrack = req.body;
//     track.findById(req.params.id,(err,doc) =>{
//         if(doc === undefined){
//            res.status(400).json({ msg: `This track track:${req.params.id} does not exist`});
//         }else{
//             track.findByIdAndUpdate(req.params.id,{...updatedTrack},{ new: true},(err,doc) =>{
//                 if(doc === undefined){
//                     res.json(err);
//                 }else{
//                     res.json(doc);
//                 }
//             })
//         }
//     })
// });


 module.exports = router;