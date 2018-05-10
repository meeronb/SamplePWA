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


module.exports = router;
