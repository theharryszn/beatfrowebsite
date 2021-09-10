const express = require('express');
const blog = require('../database/blogs');
const router = express.Router();


//get all blogs

router.get('/', (req, res) => {
    blog.find({}, (err, docs) => {
         res.json(docs);
    })
});


//get single blog 

router.get('/:id', (req, res) => {
    blog.findById(req.params.id,(err,doc) =>{
        if(doc === undefined){
           res.status(400).json({ msg: `This blog blog:${req.params.id} does not exist`});
        }else{
            res.json(doc);
        }
    })
});


// post blog
router.post('/', (req, res) => {
    const newBlog = {
        body: req.body.body,
        userId: req.body.userId,
        userName: req.body.userName,
        thumbnail: req.body.thumbnail,
        images: req.body.images,
        dateAdded: new Date()
    }
    blog.insertMany([newBlog], (err, docs) => {
        if(docs === undefined){
            res.json(err);
       }else{
         res.json({success:true});
       }
    })
});


module.exports = router;