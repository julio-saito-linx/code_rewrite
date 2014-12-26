'use strict';

var assert = require('chai').assert;
var parser = require('../src/parser');
var generator = require('../src/generator');


// https://github.com/ariya/esprima/blob/master/demo%2Frewrite.js
describe('rewriting code', function () {

	it('should parse a code', function () {
		var syntax = parser.parse('40 + 2;');

		// body[0]
		var body = syntax.body[0];
		var expression = syntax.body[0].expression;
		assert.propertyVal(body, 'type', 'ExpressionStatement');
		assert.deepPropertyVal(expression, 'type', 'BinaryExpression');
		assert.deepPropertyVal(expression, 'operator', '+');
		assert.deepPropertyVal(expression, 'left.type', 'Literal');
		assert.deepPropertyVal(expression, 'left.value', 40);
		assert.deepPropertyVal(expression, 'right.type', 'Literal');
		assert.deepPropertyVal(expression, 'right.value', 2);
		assert.propertyVal(body, 'type', 'ExpressionStatement');

		// tokens
		assert.propertyVal(syntax.tokens[0], 'type', 'Numeric');
		assert.propertyVal(syntax.tokens[0], 'value', '40');
		assert.propertyVal(syntax.tokens[1], 'type', 'Punctuator');
		assert.propertyVal(syntax.tokens[1], 'value', '+');
		assert.propertyVal(syntax.tokens[2], 'type', 'Numeric');
		assert.propertyVal(syntax.tokens[2], 'value', '2');

	});

	it('should parse and regenarete', function () {
		var syntax = parser.parse('   40   +    41    ;');
		var newCode = generator.generate(syntax);

		assert.equal('40 + 41;', newCode);
	});

});
