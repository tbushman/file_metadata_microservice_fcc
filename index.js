var express = require('express');
var router = express.Router();
var itemRouter = express.Router({mergeParams: true});
var _ = require('underscore');
var path = require("path");
var bodyParser = require("body-parser");
var dotenv = require('dotenv');
var mongodb = require("mongodb");
var mongo = require('./mongo_client.js');
var url = require('url');

router.use('/upload', require('./upload.js'))

router.get('/', function(req, res){
	//home page
	res.render('index', {
		title: 'FCC File Metadata Microservice'
	});
});

module.exports = router;

