'use strict';

var assert = require('chai').assert;
var escodegen = require('escodegen');

describe('generating code', function () {
	it('should create a sum', function () {
		var result = escodegen.generate({
		    type: 'BinaryExpression',
		    operator: '+',
		    left: { type: 'Literal', value: 40 },
		    right: { type: 'Literal', value: 2 }
		});

		assert.equal('40 + 2', result);
	});

});
