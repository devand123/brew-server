var config = {
	local: {
		ENV_URL: 'http://localhost:8100',
		brewerydb_api_key: 'e0794624a221cf578c9805ff91ab8cbb'
	},
	dev: {
		ENV_URL: 'http://localhost:8100',
		brewerydb_api_key: 'e0794624a221cf578c9805ff91ab8cbb'
	},
	production: {
		ENV_URL: 'https://s3-us-west-2.amazonaws.com',
		brewerydb_api_key: 'e0794624a221cf578c9805ff91ab8cbb'
	}
};

var environment = process.env.NODE_ENV || 'local';
module.exports = config[environment];