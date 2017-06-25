var express = require('express');
var bodyParser = require('body-parser');
var findParentDir = require("find-parent-dir");

var path;
var app = express();

findParentDir(__dirname, 'backend', function(err, dir){
	path = dir;
	console.log("directory :"+path);
	app.use(express.static(path+ 'ui-router'));
});

app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                    
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.get('/', function(req, res){
	res.sendFile(path+"/ui-router/public/home.html");
});

app.listen(3000, function(){
	console.log("ui-router app listening at 3000");
});