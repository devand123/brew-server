var config = require('../config/config');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb(config.brewerydb_api_key);

module.exports.init = function (app) {

	app.get('/brew/search/beer/:q', function (req, res, next) {
		brewdb.search.beers({ q: req.params.q }, function (err, data) {
			if(err) return res.status(500).send({ error: err });
			res.status(200).json(data);
		});
	});

};