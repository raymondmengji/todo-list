const express = require('express');
const router = express.Router();
const User = require('../models/User');
const List = require('../models/List');

//delete user
router.delete('/:id', async(req, res) => {
    try{
        const removed = await User.remove({_id: req.params.id});
        res.status(200).json(removed);
    }
    catch(err) {
        res.status(400).json({msg: err});
    }
});

module.exports = router;