const express = require('express');
const router = express.Router();
const User = require('../models/User');
const List = require('../models/List')

router.patch('/:id', async(req, res) => {
    try{
        var updateObject = req.body;
        const updatedUser = await User.updateOne({_id: req.params.id}, {$set: updateObject});
        res.status(200).json(updatedUser);
    }
    catch(err) {
        res.status(400).json({msg: err});
    }
});

//add to user list
router.patch('/:id/lists', async(req, res) => {
    try{
        if(req.body != null) {

            let new_list = new List({
                name: req.body.name
            });

            const user = await User.findById(req.params.id);
            user["lists"].push(new_list);
            var temp = user["lists"];
            const updatedUser = await User.updateOne({_id: req.params.id}, {$set: {lists: temp}});
            res.status(200).json(updatedUser);
        }
        else {
            res.status(400).json({msg: "bad request"});
        }
    }
    catch(err) {
        res.status(400).json({msg: err});
    }
});


module.exports = router;