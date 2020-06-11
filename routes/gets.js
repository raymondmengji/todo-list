const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get all
router.get('/', async(req, res) => {
    try {
        const posts = await User.find();
        res.json(posts);
    }
    catch(err) {
        res.json({msg: err});
    }
});

module.exports = router;