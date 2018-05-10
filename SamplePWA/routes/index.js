'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/offline', function (req, res) {
    res.sendFile('public/Offline.html');
});

module.exports = router;
