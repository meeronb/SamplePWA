'use strict';
var express = require('express');
var router = express.Router();

var webpush = require('web-push');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/offline', function (req, res) {
    res.sendFile('public/Offline.html');
});


const vapidKeys = {
    publicKey: 'BIegbLwcYd-wESI5xXaDC2aahWD4Pf500CnhpNSFIOZcQsSwVG2_DPRgdYoqMDjEGQpMpC5mDhdspcWbmOHe31Q',
    privateKey: 'PDrOOmc6H501LuqRvHO1-NHoPgA5TSrkKpV0kuf1wKM'
};

webpush.setVapidDetails(
    'mailto:prkhandelwal@hotmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

router.get('/vapidPublicKey', function (req, res) {
    res.send(vapidKeys.publicKey);
});

router.post('/register', function (req, res) {
    // A real world application would store the subscription info.
    res.sendStatus(201);
});

router.post('/sendNotification', function (req, res) {
    const subscription = req.body.subscription;
    const payload = 'payload';
    const options = null;

    webpush.sendNotification(subscription, payload, options)
        .then(function () {
            res.sendStatus(201);
        })
        .catch(function (error) {
            res.sendStatus(500);
            console.log(error);
        });
});


module.exports = router;
