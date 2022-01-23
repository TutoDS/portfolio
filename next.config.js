const path = require('path');
const nextTranslate = require('next-translate');

module.exports = {
	trailingSlash: true,
	images: {
		domains: ['source.unsplash.com']
	},

	...nextTranslate()
};
