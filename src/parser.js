'use strict';

var esprima = require('esprima');

module.exports = {
	parse: function(code) {
        var syntax = esprima.parse(code, {
        	raw: true,
        	tokens: true,
        	range: true,
        	comment: true
        });

        return syntax;
    }
};