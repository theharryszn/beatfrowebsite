const express = require('express');
const actions = require('../../database/actions/actions');
const router = express.Router();



const actionTypes = {
    follow:"FOLLOW",

}

// follows and unfollow
router.get('/followers/:id', (req, res) => {
    actions.find({ type: actionTypes.follow, groupId: req.params.id}, (err, docs) => {
        if(docs === undefined){
            res.status(400).json({ msg: `does not exist`});
        }else{
             res.json(docs);
        }
    })
});


//check follow
router.get('/check/:id/:me', (req, res) => {
    actions.find({ type: actionTypes.follow, groupId: req.params.id }, (err, docs) => {
        if(docs !== undefined){
            const hasFollowedBefore = docs.find(follow => follow.data.follower === req.params.me);
            if(hasFollowedBefore === undefined ){
                res.json({hasFollowedBefore: false})
            }else{
                res.json({hasFollowedBefore: true})
            }
        }else{
             res.json(docs);
        }
    })
});

router.post('/follow/:id', (req, res) => {
    const newAction = {
        type:actionTypes.follow,
        groupId:req.params.id,
        data:{
            following: req.params.id,
            follower: req.body.follower,
        },
        dateAdded: new Date()
    }
    actions.find({groupId: req.params.id }, (err, docs) => {
        if(docs !== undefined){
            const hasFollowedBefore = docs.find(follow => follow.data.follower === req.body.follower);
            console.log(hasFollowedBefore)
            if(hasFollowedBefore === undefined ){
                actions.insertMany([newAction], (err,docs) => {
                        if(docs === undefined){
                            res.json(err);
                    }else{
                        res.json({success:true});
                    }
                    })
            }else{
            res.status(400).json({msg:'You have already followed this user'});
            }
        }
    })
    
});

router.delete('/unfollow/:id', (req, res) => {
    actions.findOneAndDelete({ _id: req.params.id, }, (err, docs)=> {
        if(docs !== undefined){
             res.json({ success: true });
        }
    })
});





module.exports = router;