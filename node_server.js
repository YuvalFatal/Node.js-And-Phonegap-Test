var express = require('express');
var app = express();

app.get('/', function (req, res) {
	console.log('request')
  	res.jsonp({'message': 'Hello World! ' + req.query.name});
});

app.listen(3100);
