var config = require('./config/config');
var express = require('express');
var cors = require('express-cors');
var bodyParser = require('body-parser');
var app = express();

// CORS stuff
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', config.ENV_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

// to parse json
app.use(bodyParser());

// to handle errors
app.use(function (err, req, res, next) {
	if(err) {
		res.status(500);
		res.json({ error: err });
	}
});

// initialize all controllers
require('./controllers/brewController').init(app);


app.listen(3000);