'use strict';

var escodegen = require('escodegen');

var option = {
    comment: true,
    format: {
        indent: {
            style: 4
        },
        quotes: '\''
    }
};

module.exports = {
	generate: function(syntax) {
        syntax = escodegen.attachComments(syntax, syntax.comments, syntax.tokens);
        var code = escodegen.generate(syntax, option);
        return code;
    }
};