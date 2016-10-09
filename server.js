var express = require("express");
var multer  = require('multer');
var pug = require('pug');
var path = require('path');
var app = express();
var uploadFile = multer({ dest : './uploads/' });

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
	//home page
	res.render('index', {
		title: 'FCC File Metadata Microservice'
	});
});

app.post('/upload', uploadFile.single('upload'), function(req, res){
	var file_size = req.file.size;
	var list = {
		file_size: file_size
	};
	res.render('index', {
		title: 'FCC File Metadata Microservice',
		list: JSON.stringify(list)
	});
});

var server = app.listen(process.env.PORT || 8080, function(){
	var port = server.address().port;
	console.log('App now running on port', port);
});
