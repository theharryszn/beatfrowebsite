const express = require('express');
const lyric = require('../database/lyrics');
const router = express.Router();


 //get single lyric
 router.get('/:id', (req, res) => {
    lyric.findById(req.params.id,(err,doc) =>{
        if(doc === undefined){
           res.status(400).json({ msg: `This track track:${req.params.id} does not exist`});
        }else{
            res.json(doc);
        }
    })
})


//add lyric
router.post('/', (req, res) => {
    const newLyric = {
        _id: req.body._id,
        body:req.body.body,
        dateAdded: new Date()
    }
   lyric.insertMany([newLyric], (err, docs) => {
      if(docs === undefined){
           res.json(err);
      }else{
        res.json({success:true});
      }
    })

 });


module.exports = router;