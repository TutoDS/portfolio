const path = require('path');
const { i18n } = require('./next-i18next.config');

module.exports = {
	trailingSlash: true,
	images: {
		domains: ['source.unsplash.com']
	},

	i18n
};
