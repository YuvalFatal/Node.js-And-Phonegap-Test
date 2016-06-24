var express = require('express');
var app = express();

app.get('/', function (req, res) {
  	res.jsonp({'message': 'Hello World! ' + req.query.name});
});

app.listen(8080);
