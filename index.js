var express = require('express'),
	app = express();

var port = process.env.PORT || 9092;  


app.get('/', function(req, res){
	res.send('Redis api is working fine.....1234665');
});

app.listen(port, function(req, res){
	console.log('App is running on port:-' + port);
});