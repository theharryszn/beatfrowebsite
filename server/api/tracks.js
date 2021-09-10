const express = require('express');
const router = express.Router();
const track = require('../database/tracks');


// get all tracks
 router.get('/', (req, res) => {
    track.find({}, (err,doc)=> {
        res.json(doc);
    })
 });


 //get single track
 router.get('/:id', (req, res) => {
     track.findById(req.params.id,(err,doc) =>{
         if(doc === undefined){
            res.status(400).json({ msg: `This track track:${req.params.id} does not exist`});
         }else{
             res.json(doc);
         }
     })
 })


 //delete single track
 router.delete('/delete/:id', (req, res) => {
    track.findByIdAndDelete(req.params.id, (err,doc) => {
        if(doc === undefined){
            res.status(400).json({ msg: `This track track:${req.params.id} does not exist`});
        }else{
             res.json({success:true});
        }
    })
 });

 //add track 
 router.post('/', (req, res) => {
    const newTrack = {
        title: req.body.title,
        artiste: req.body.artiste,
        genres: req.body.genres,
        song: req.body.song,
        artisteId: req.body.artisteId,
        coverPhoto: req.body.coverPhoto,
        albumName: req.body.albumName,
        lyricsApiId: req.body.lyricsApiId,
        explicit : req.body.explicit,
        dateAdded: new Date()
    }
   track.insertMany([newTrack], (err, docs) => {
      if(docs === undefined){
           res.json(err);
      }else{
        res.json({success:true,_id: docs._id});
      }
    })

 });

 
 router.post('/many', (req, res) => {
   track.insertMany(req.body, (err, docs) => {
      if(docs === undefined){
           res.json(err);
      }else{
        res.json({success:true});
      }
    })

 });


 //get all tracks from one artiste

router.get('/songs/:id', (req, res) => {
     track.find({ artisteId: req.params.id }, (err, docs) => {
        if(docs === undefined){
            res.json(err);
       }else{
         res.json(docs);
       }
    })
})


// update track
router.put('/:id', (req, res) => {
    const updatedTrack = req.body;
    track.findById(req.params.id,(err,doc) =>{
        if(doc === undefined){
           res.status(400).json({ msg: `This track track:${req.params.id} does not exist`});
        }else{
            track.findByIdAndUpdate(req.params.id,{...updatedTrack},{ new: true},(err,doc) =>{
                if(doc === undefined){
                    res.json(err);
                }else{
                    res.json(doc);
                }
            })
        }
    })
});


 module.exports = router;