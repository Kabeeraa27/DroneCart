const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res, next) {
    return res.render('index.ejs');
});

router.post('/', function(req, res, next) {
    const personInfo = req.body;

    if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
        res.send();
    } else {
        if (personInfo.password == personInfo.passwordConf) {
            const newUser = new User({
                email: personInfo.email,
                username: personInfo.username,
                password: personInfo.password,
                passwordConf: personInfo.passwordConf
            });

            newUser.save()
                .then(user => {
                    console.log('User saved successfully:', user);
                    res.send({"Success":"You are registered, you can now login."});
                })
                .catch(err => {
                    console.error('Error saving user:', err);
                    res.status(500).send({"Error": "Failed to save user."});
                });
        } else {
            res.send({"Success":"Password does not match confirmation."});
        }
    }
});

router.get('/login', function (req, res, next) {
    return res.render('login.ejs');
});

router.post('/login', function (req, res, next) {
    User.findOne({ email: req.body.email }, function(err, data) {
        if (data) {
            if (data.password == req.body.password) {
                req.session.userId = data.unique_id;
                res.send({"Success": "Success!"}); // Send success response
            } else {
                res.send({"Error": "Wrong password!"}); // Send error response
            }
        } else {
            res.send({"Error": "This Email Is not registered!"}); // Send error response
        }

    });
});

router.get('/profile', function (req, res, next) {
    User.findOne({ _id: req.session.userId }, function (err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send({ "Error": "An error occurred while finding user." });
        }
        if (!data) {
            return res.redirect('/');
        }
        return res.render('data.ejs', { "name": data.username, "email": data.email });
    });
});

router.get('/logout', function (req, res, next) {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

router.get('/forgetpass', function (req, res, next) {
    res.render("forget.ejs");
});

router.post('/forgetpass', function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send({ "Error": "An error occurred while finding user." });
        }
        if (!data) {
            return res.send({ "Success": "This Email Is not registered!" });
        }
        if (req.body.password !== req.body.passwordConf) {
            return res.send({ "Success": "Password does not match confirmation." });
        }

        data.password = req.body.password;
        data.passwordConf = req.body.passwordConf;

        data.save(function (err, updatedUser) {
            if (err) {
                console.error(err);
                return res.status(500).send({ "Error": "Failed to update password." });
            }
            return res.send({ "Success": "Password changed!" });
        });
    });
});

module.exports = router;
