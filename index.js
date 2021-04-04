var express = require('express'),
	app = express();

var port = process.env.PORT || 9090;  


app.get('/', function(req, res){
	res.send('Redis api is working fine.....xyz');
});

app.get('/message', function(req, res){
	res.send({ 'message': 'Hello world ............xyz'});
});

app.get('/redis', function(req, res){
	res.send({ 'message': 'Redis data fetched successfully........123'});
});

app.listen(port, function(req, res){
	console.log('App is running on port:-' + port);
});