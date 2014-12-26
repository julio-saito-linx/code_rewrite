'use strict';

var escodegen = require('escodegen');

var option = {
    comment: true,
    format: {
        indent: {
            style: '    ',
            base: 0,
            adjustMultilineComment: false
        },
        newline: '\n',
        space: ' ',
        json: false,
        renumber: false,
        hexadecimal: false,
        quotes: 'single',
        escapeless: false,
        compact: false,
        parentheses: true,
        semicolons: true,
        safeConcatenation: false
    }
};

module.exports = {
	generate: function(syntax) {
        syntax = escodegen.attachComments(syntax, syntax.comments, syntax.tokens);
        var code = escodegen.generate(syntax, option);
        return code;
    }
};