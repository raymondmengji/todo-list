const express = require('express');
const router = express.Router();
const User = require('../models/User');
const List = require('../models/List');
const Item = require('../models/Item');

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
            user.lists.push(new_list);
            const updatedUser = await User.updateOne({_id: req.params.id}, {$set: {lists: user.lists}});
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

//add to individual list
router.patch('/:userID/lists/:listID', async(req, res) => {
    try{
        const user = await User.findById(req.params.userID);
        for (var i = 0; i < user.lists.length; i++) {
            var obj = user.lists[i];
            if (obj._id == req.params.listID) {

                let new_item = new Item({
                    name: req.body.name
                });
                obj.items.push(new_item);
                const updatedUser = await User.updateOne({_id: req.params.userID}, {$set: {lists: user.lists}});
                res.status(200).json(updatedUser);
            }
        }
    }
    catch(err) {
        res.status(400).json({msg: err});
    }
});

router.patch('/:id/clear', async(req, res) => {
    try{
        const updatedUser = await User.updateOne({_id: req.params.id}, {$set: {lists: []}});
        res.status(200).json(updatedUser);
    }
    catch(err) {
        res.status(400).json({msg: err});
    }
});


module.exports = router;