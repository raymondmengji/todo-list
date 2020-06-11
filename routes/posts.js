const express = require('express')
const router = express.Router();
const User = require('../models/User');

router.post('/', async(req, res) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });
    try {
        const newUser = await user.save()
        res.json(newUser);
    }
    catch(err) {
        res.json({msg: err});
    }
    
});

module.exports = router;

