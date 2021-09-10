const express = require('express');
const router = express.Router();
const genre = require('../database/genres');


router.get('/', (req, res) => {
    genre.find({},(err, docs) => {
          res.json(docs);
    })
});


router.post('/', (req, res) => {
    console.log(req.body)
    genre.insertMany(req.body,(err,docs) => {
        if(docs === undefined){
            res.json(err);
       }else{
         res.json({success:true});
       }
    })
});


module.exports = router;