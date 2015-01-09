'use strict';

var esprima = require('esprima');
var log = require('./logger/logger');

module.exports = {
	parse: function(code, options) {
        var localOptions = options || {
        	raw: true,
        	tokens: true,
        	range: true,
        	comment: true,
            loc: true
        };

        // log.debug('\n\n:: parser.parse() - code::');
        // log.debug(code);

        var syntax = esprima.parse(code, localOptions);

        log.debug('\n\n:: parser.parse() - syntax::');
        log.debug(syntax);

        return syntax;
    }
};
