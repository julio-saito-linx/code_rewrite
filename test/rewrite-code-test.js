'use strict';

var chai = require('chai');
var Q = require('q');
var chaiAsPromised = require('chai-as-promised');
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

		describe('__getAllFunctionsName()', function () {

			it('Function Expressions', function () {
				var syntax = parser.parse([
					'var f1 = function(arg1, arg2) {',
					'    return arg1 + arg2;',
					'};',
				].join('\n'), parseOptions);

				var functionsNamesResult = rewriter.__getAllFunctionsName(syntax);
                return assert.eventually.deepPropertyVal(functionsNamesResult,
					'functionsNames[0].name', 'f1');
			});

            it('Function Declarations', function () {
                var syntax = parser.parse([
                    'function f2 (arg1, arg2) {',
                    '    return arg1 + arg2;',
                    '};',
                ].join('\n'), parseOptions);

                var functionsNamesResult = rewriter.__getAllFunctionsName(syntax);
                return assert.eventually.deepPropertyVal(functionsNamesResult,
                    'functionsNames[0].name', 'f2');
            });

            it('Function Expressions override Function Declarations', function () {
                var syntax = parser.parse([
                    'var f3 = function f4 (arg1, arg2) {',
                    '    return arg1 + arg2;',
                    '};',
                ].join('\n'), parseOptions);

                var functionsNamesResult = rewriter.__getAllFunctionsName(syntax);
                return assert.eventually.deepPropertyVal(functionsNamesResult,
                    'functionsNames[0].name', 'f3');

            });

            it('shoud get all names', function (done) {
                var syntax = parser.parse([
                    'var f5 = function () {};',
                    'var f6 = function () {};',
                    'function f7 () {',
                    '    function f8 () {};',
                    '};',
                ].join('\n'), parseOptions);

                var functionsNamesResult = rewriter.__getAllFunctionsName(syntax);

                Q.all([
                    assert.eventually.deepPropertyVal(functionsNamesResult,
                    'functionsNames[0].name', 'f5'),
                    assert.eventually.deepPropertyVal(functionsNamesResult,
                    'functionsNames[1].name', 'f6'),
                    assert.eventually.deepPropertyVal(functionsNamesResult,
                    'functionsNames[2].name', 'f7'),
                    assert.eventually.deepPropertyVal(functionsNamesResult,
                    'functionsNames[3].name', 'f8').notify(done),
                ]);

            });

			it('Get All names', function (done) {
				var syntax = parser.parse([
                    'var f5 = function () {};',
                    'var f6 = function () {};',
                    'function f7 () {',
                    '    function f8 () {};',
                    '};',
				].join('\n'), parseOptions);

                var functionsNamesResult = rewriter.__getAllFunctionsName(syntax);

                Q.all([
                    assert.eventually.deepPropertyVal(functionsNamesResult,
                    'functionsNames[0].name', 'f5'),
                    assert.eventually.deepPropertyVal(functionsNamesResult,
                    'functionsNames[1].name', 'f6'),
                    assert.eventually.deepPropertyVal(functionsNamesResult,
                    'functionsNames[2].name', 'f7'),
                    assert.eventually.deepPropertyVal(functionsNamesResult,
                    'functionsNames[3].name', 'f8').notify(done),
                ]);

			});

		}); // __getAllFunctionsName()



        describe('__insertAllConsoleLog()', function () {

            it('should insert a console log', function () {
                var syntax = parser.parse([
                    'var f1 = function(arg1, arg2) {',
                    '    return arg1 + arg2;',
                    '};',
                ].join('\n'), parseOptions);

                // get all functions names
                return rewriter.__getAllFunctionsName(syntax)
                .then(function(functionsNamesResult) {

                    // insert consoles
                    return rewriter.__insertAllConsoleLog(functionsNamesResult)
                    .then(function(syntax_with_console) {

                        // check
                        assert.propertyVal(syntax_with_console.allResults[0],
                            'name', 'f1');

                    });
                });
            });

            it('should insert 3 consoles log', function () {
                var syntax = parser.parse([
                    'var f1 = function(arg1, arg2) {',
                    '    return arg1 + arg2;',
                    '};',
                    'var f2 = function(arg1, arg2) {',
                    '    return arg1 + arg2;',
                    '};',
                    'var f3 = function(arg1, arg2) {',
                    '    return arg1 + arg2;',
                    '};',
                ].join('\n'), parseOptions);

                // get all functions names
                return rewriter.__getAllFunctionsName(syntax)
                .then(function(functionsNamesResult) {

                // insert consoles
                return rewriter.__insertAllConsoleLog(functionsNamesResult)
                .then(function(syntax_with_console) {

                    // check
                    assert.propertyVal(syntax_with_console.allResults[0],
                        'name', 'f1');
                    assert.propertyVal(syntax_with_console.allResults[1],
                        'name', 'f2');
                    assert.propertyVal(syntax_with_console.allResults[2],
                        'name', 'f3');

                });
                });
            });


        }); // __insertAllConsoleLog()



	}); // instrumentalize()
});
