'use strict';

var esprima = require('esprima');

module.exports = {
	parse: function(code) {
        var syntax = esprima.parse(code, {
        	raw: true,
        	tokens: false,
        	range: false,
        	comment: false
        });

        return syntax;
    }
};