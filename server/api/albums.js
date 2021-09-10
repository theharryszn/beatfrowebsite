const express = require('express');
const router = express.Router();
const albums = require('../database/albums');


// get all albums
 router.get('/', (req, res) => {
    albums.find({}, (err, docs) => {
        res.json(docs);
    })
 });

 router.get('/albums/:id', (req, res) => {
    albums.find({ artisteId : req.params.id},(err,docs) => {
        if(docs === undefined){
            res.status(400).json({ msg: `This album album:${req.params.id} does not exist`, err: err});
        }else{
             res.json(docs);
        }
    })
 });


 //get single albums
 router.get('/:id', (req, res) => {
    albums.findById(req.params.id, (err, doc) => {
        if(doc === undefined){
            res.status(400).json({ msg: `This album album:${req.params.id} does not exist`});
        }else{
             res.json(doc);
        }
    })
 })

//delete single albums
router.get('/delete/:id', (req,res) => {
    albums.findByIdAndDelete(req.params.id, (err,doc) => {
        if(doc === undefined){
            res.status(400).json({ msg: `This album album:${req.params.id} does not exist`});
        }else{
             res.json({success:true});
        }
    })
})

//add to albums
router.post('/', (req, res) => {
    const newAlbum = {
        title: req.body.title,
        artiste: req.body.artiste,
        genres: req.body.genres,
        artisteId: req.body.artisteId,
        coverPhoto: req.body.coverPhoto,
        tracks: req.body.tracks,
        explicit : req.body.explicit,
        dateAdded: new Date()
    }
    albums.insertMany([newAlbum], (err, docs) => {
        if(docs === undefined){
            res.json(err);
       }else{
         res.json({success:true});
       }
    })
});


// update albums

router.put('/:id', (req, res) => {
    const updatedAlbum = req.body;
    albums.findById(req.params.id,(err,doc) =>{
        if(doc === undefined){
           res.status(400).json({ msg: `This album album:${req.params.id} does not exist`});
        }else{
            albums.findByIdAndUpdate(req.params.id,{...updatedAlbum},{ new: true},(err,doc) =>{
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