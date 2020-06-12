const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const User = require('../models/User');
const { restart } = require('nodemon');

require('dotenv/config');
const secretOrKey = process.env.secretOrKey;

router.post('/register', (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    }
    User.findOne({username: req.body.username}).then(user => {
        if (user) {
            return res.status(400).json({username: "Username already exists"});
        }
        else {
            let user = new User({
                username: req.body.username,
                password: req.body.password
            });
            //hash password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) throw err;
                    user.password = hash;
                    try {
                        const newUser = user.save()
                        res.json(newUser);
                    }
                    catch(err) {
                        res.json({msg: err});
                    }
                })
            })
        }
    })
});


router.post('/login', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username}).then(user => {
        if (!user) {
            return res.status(400).json({usernamenotfound: "Username not found"});
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user._id,
                    name: user.username
                };

                jwt.sign(
                    payload,
                    secretOrKey,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            }
            else {
                return res.status(400).json({passwordincorrect: "Password incorrect"});
            }
        });
    });
});

module.exports = router;