const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get all
router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err) {
        res.status(400).json({msg: err});
    }
});

// get by id
router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch(err) {
        res.status(400).json({msg: err});
    }
});

module.exports = router;