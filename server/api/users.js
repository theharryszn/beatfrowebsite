const express = require('express');
const user = require('../database/users');
const router = express.Router();


// get all users
 router.get('/', (req, res) => {
    user.find({}, (err,doc)=> {
        res.json(doc);
    })
 });


 //get single user
 router.get('/:id', (req, res) => {
     user.findById(req.params.id,(err,doc) =>{
         if(doc === undefined){
            res.status(400).json({ msg: `This track track:${req.params.id} does not exist`});
         }else{
             res.json(doc);
         }
     })
 })


 //delete single user
 router.delete('/delete/:id', (req, res) => {
    user.findByIdAndDelete(req.params.id, (err,doc) => {
        if(doc === undefined){
            res.status(400).json({ msg: `This track track:${req.params.id} does not exist`});
        }else{
             res.json({success:true});
        }
    })
 });

 //add user
 router.post('/', (req, res) => {
    const newUser = {
        _id: req.body._id,
        email: req.body.email,
        username: req.body.username,
        isArtiste: false,
        isVerified:false,
        coverPhoto: "https://firebasestorage.googleapis.com/v0/b/beatfro.appspot.com/o/utils%2F791214_man_512x512.png?alt=media&token=4e37a881-2a73-4084-83bb-43518f075f10",
        followers:0,
        following:0,
        isPremium: false,
        dateAdded: new Date()
    }
   user.insertMany([newUser], (err, docs) => {
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