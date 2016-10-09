var express = require("express");
var multer  = require('multer');
var pug = require('pug');
var path = require('path');
var app = express();
/*var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now())
  },
  size: function(req, file, cb) {
	console.log(file.size)
	cb(null, file.size)
	
  }
})*/
var uploadFile = multer({ dest : './uploads/' });//.single('upload');

app.use(express.static(__dirname + '/public'));
/*app.use(multer({
	dest: './uploads/'/*,
	rename: function (fieldname, filename) {
		return filename.replace(/\W+/g, '-').toLowerCase()
	}
}));*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use('/', require('./index.js'));
//app.use('/upload', require('./upload.js'));
//app.post('/upload', require('./upload.js'));
app.get('/', function(req, res){
	//home page
	res.render('index', {
		title: 'FCC File Metadata Microservice'
	});
});

app.post('/upload', uploadFile.single('upload'), function(req, res){
/*	console.log(req.files.name)
*/	
	/*uploadFile(req, res, function(err){
		if (err) {
			return handleError(res, err.message, "Could not upload.");
		}
		/*var file_upload = req.file;
		var file_name = req.file.filename;
		processFileSize(res, file_upload, file_name)*/
		var file_size = req.file.size;
		var list = {
			file_size: file_size
		};
		res.render('index', {
			title: 'FCC File Metadata Microservice',
			list: JSON.stringify(list)
		});
//	});
			
})
		
/*function processFileSize(res, file_upload) {
}*/		

var server = app.listen(process.env.PORT || 8080, function(){
	var port = server.address().port;
	console.log('App now running on port', port);
});
