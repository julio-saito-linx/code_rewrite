'use strict';

var esprima = require('esprima');

module.exports = {
	parse: function(code, options) {
        var localOptions = options || {
        	raw: true,
        	tokens: false,
        	range: false,
        	comment: false
        };

        var syntax = esprima.parse(code, localOptions);

        return syntax;
    }
};