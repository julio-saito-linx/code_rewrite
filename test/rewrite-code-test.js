'use strict';

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var assert = chai.assert;

var parser = require('../src/parser');
var generator = require('../src/generator');
var rewriter = require('../src/rewriter');


// https://github.com/ariya/esprima/blob/master/demo%2Frewrite.js
describe('rewriting code', function () {

	var parseOptions = {
    	raw: false,
    	tokens: true,
    	range: true,
    	comment: true
	};

	it('should parse a code', function () {
		var syntax = parser.parse('40 + 2;', parseOptions);

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
		var syntax = parser.parse('   40   +    41    ;', parseOptions);
		var newCode = generator.generate(syntax);

		assert.equal('40 + 41;', newCode);
	});

	it('should preserve comments', function () {
		var syntax = parser.parse([
			'// this is a comment',
			'2 + 1;// other comment, bro!',
		].join('\n'), parseOptions);

		var newCode = generator.generate(syntax);

		assert.equal([
			'// this is a comment',
			'2 + 1;    // other comment, bro!',    // idented comment
			'',						 // new line from hell
		].join('\n'), newCode);
	});


	describe('instrumentalize()', function () {
		var parseOptions = {
	    	raw: false,
	    	tokens: false,
	    	range: false,
	    	comment: false
		};

		describe('__getFunctionName()', function () {

			it('Function Expressions', function () {
				var syntax = parser.parse([
					'var f1 = function(arg1, arg2) {',
					'    return arg1 + arg2;',
					'};',
				].join('\n'), parseOptions);

				return assert.eventually.propertyVal(
					rewriter.__getFunctionName(syntax), 'name', 'f1');
			});

			it('Function Declarations', function () {
				var syntax = parser.parse([
					'function f2 (arg1, arg2) {',
					'    return arg1 + arg2;',
					'};',
				].join('\n'), parseOptions);

				return assert.eventually.propertyVal(
					rewriter.__getFunctionName(syntax),
					'name', 'f2');
			});

		}); // __getFunctionName()


		describe('__findFunctionBlockArray', function () {

			it('Function Expressions', function () {

				var stubResult = {
				  "name": "f1",
				  "node": {
				    "type": "FunctionExpression",
				    "id": null,
				    "params": [
				      {
				        "type": "Identifier",
				        "name": "arg1"
				      },
				      {
				        "type": "Identifier",
				        "name": "arg2"
				      }
				    ],
				    "defaults": [],
				    "body": {
				      "type": "BlockStatement",
				      "body": [
				        {
				          "type": "ReturnStatement",
				          "argument": {
				            "type": "BinaryExpression",
				            "operator": "+",
				            "left": {
				              "type": "Identifier",
				              "name": "arg1"
				            },
				            "right": {
				              "type": "Identifier",
				              "name": "arg2"
				            }
				          }
				        }
				      ]
				    },
				    "rest": null,
				    "generator": false,
				    "expression": false
				  }
				};

				return assert.eventually.deepPropertyVal(
					rewriter.__findFunctionBlockArray(stubResult),
					'block_body[0].type', 'ReturnStatement');

			});

		}); // __findFunctionBlockArray()


	}); // instrumentalize()


});
