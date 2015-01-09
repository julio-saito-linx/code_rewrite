'use strict';

var FS = require('q-io/fs');
var parser = require('./parser');
var generator = require('./generator');
var Q = require('q');
var estraverse = require('estraverse');
var log = require('./logger/logger');
var consoleUtilSyntax = require('./syntaxes/consoleUtilSyntax');

module.exports = {
    __readFile: function(fullPath) {
        return FS.read(fullPath, "b");
    },
    __writeFile: function(fullPath, content) {
        return FS.write(fullPath, content);
    },

    __getSyntax: function(content) {
        return new Q.Promise(function (resolve, reject) {
            try{
                var syntax = parser.parse(content);
                resolve(syntax);
            }
            catch(err){
                reject(err.stack);
            }
        });
    },
    __generateCode: function(syntax) {
        return generator.generate(syntax);
    },

    writeSyntax: function(sourceFilePath, destinationFilePath) {
        var self = this;
        this.__readFile(sourceFilePath)
        .then(self.__getSyntax)
        .then(function(syntax) {
            var syntaxStringified = JSON.stringify(syntax, ' ', 2);
            return self.__writeFile(destinationFilePath, syntaxStringified);
        })
        .catch(function(err) {
            console.log('\n>>---------\n err.stack:', err.stack, '\n>>---------\n');
        });
    },

    rewrite: function(sourceFilePath, destinationFilePath) {
        var self = this;
        this.__readFile(sourceFilePath).then(function(content) {
            var syntax = self.__getSyntax(content);
            var newCode = self.__generateCode(syntax);
            return self.__writeFile(destinationFilePath, newCode);
        }).then(function() {
            console.log('code rewrited at', destinationFilePath);
        })
        .catch(function(err) {
            console.log('\n>>---------\n err.stack:', err.stack, '\n>>---------\n');
        });
    },

	instrumentalize: function(sourceFilePath, destinationFilePath) {
        var self = this;
        return self.__readFile(sourceFilePath)
         .then(self.__getSyntax)
         .then(self.__getAllFunctionsName)
         .then(function(result) {
            return self.__insertAllConsoleLog(result, sourceFilePath);
         })
         .then(function(partial_result) {
            var code = self.__generateCode(partial_result.syntax);
            return self.__writeFile(destinationFilePath, code);
        })
        .catch(function(err) {
            console.log('\n>>---------\n err.stack:', err.stack, '\n>>---------\n');
        });
    },

    __getAllFunctionsName: function(syntax) {
        return new Q.Promise(function (resolve, reject) {
            var results = [];
            var result = null;
            estraverse.traverse(syntax, {
                enter: function(node){

                    // Function Expressions
                    if (node.type === 'VariableDeclarator') {
                        if (node.init && node.init.type === 'FunctionExpression') {
                            result = {
                                name: node.id.name,       // var FUNC_VAR_NAME = ....
                                loc: node.loc,            // loc: { start: { line: 2, column: 25 }, end: { line: 2, column: 26 } }
                                function_node: node.init  // FunctionExpression
                            };

                            log.debug('\n\n:: rewriter.__getAllFunctionsName() - result::');
                            log.debug(result);
                            results.push(result);
                        }
                    }

                    // Function Declarations
                    else if (node.type === 'FunctionDeclaration') {
                        if (node.id && node.id.type === 'Identifier' && node.id.name) {
                            result = {
                                name: node.id.name,  // var FUNC_VAR_NAME = ....
                                loc: node.loc,       // loc: { start: { line: 2, column: 25 }, end: { line: 2, column: 26 } }
                                function_node: node  // FunctionExpression
                            };

                            log.debug('\n\n:: rewriter.__getAllFunctionsName() - result::');
                            log.debug(result);
                            results.push(result);
                        }
                    }
                },

                // leave: function (node, parent) {
                //     if (node.type == 'FunctionDeclaration')
                //       console.log('leaving ', node.type);
                // }

            });

            if (results) {
                var finallyResult = {
                    fullSyntax: syntax,           // all syntax
                    functionsNames: results
                };

                log.debug('\n\n:: rewriter.__getAllFunctionsName() - finallyResult::');
                log.debug(finallyResult);

                return resolve(finallyResult);
            }

            reject('CANNOT FIND FUNCTION\'S NAME');
        });
    },

    __insertAllConsoleLog: function(f_name_results, source_file) {
        var rewriter = require('./rewriter');
        return new Q.Promise(function (resolve, reject) {
            var allCalls = [];

            f_name_results.functionsNames.forEach(function(functionNameResult) {
                allCalls.push(rewriter.__insertConsoleLog({
                    syntax: f_name_results.fullSyntax,
                    sourcefile: source_file,
                    name: functionNameResult.name,
                    loc: functionNameResult.loc,
                    function_node: functionNameResult.function_node
                }));
            });

            Q.all(allCalls).then(function(allResults) {
                var finalResult = {
                    syntax: allResults[0].syntax,
                    allResults: allResults
                };
                resolve(finalResult);
            });
        });
    },

    // Insert ONE console log in ONE function
    __insertConsoleLog: function(f_name_result) {
        return new Q.Promise(function (resolve, reject) {
            var result = null;

            log.debug('\n\n:: rewriter.__insertConsoleLog() - f_name_result::');
            log.debug(f_name_result);

            var block_body = f_name_result.function_node.body.body;

            // insert the syntax for the console
            var syntax = consoleUtilSyntax(f_name_result.sourcefile, f_name_result.name, f_name_result.loc);
            block_body.unshift(syntax);

            result = {
                syntax: f_name_result.syntax,       // all syntax
                name: f_name_result.name,           // function's "name"
                function_node: f_name_result.node,  // FunctionExpression
            };

            log.debug('\n\n:: rewriter.__insertConsoleLog() - result::');
            log.debug(result);

            return resolve(result);

        });
    },


};
