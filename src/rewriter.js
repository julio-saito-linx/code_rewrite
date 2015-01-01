'use strict';

var FS = require('q-io/fs');
var parser = require('./parser');
var generator = require('./generator');
var Q = require('q');
var estraverse = require('estraverse');
var log = require('./logger/logger');

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
        this.__readFile(sourceFilePath).then(function(content) {
            var syntax = self.__getSyntax(content);
            var syntaxStringified = JSON.stringify(syntax, ' ', 2);
            return self.__writeFile(destinationFilePath, syntaxStringified);
        }).then(function() {
            console.log('syntax write at', destinationFilePath);
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
        return this.__readFile(sourceFilePath)
        .then(self.__getSyntax)
        .then(self.__getFunctionName)
        .then(self.__insertAllConsoleLog)
        .then(function(partial_result) {
            var code = self.__generateCode(partial_result.syntax);
            return self.__writeFile(destinationFilePath, code);
        })
        .catch(function(err) {
            console.log('\n>>---------\n err.stack:', err.stack, '\n>>---------\n');
        });
    },

    __getFunctionName: function(syntax) {
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
                                function_node: node.init  // FunctionExpression
                            };

                            log.debug('\n\n:: rewriter.__getFunctionName() - result::');
                            log.debug(result);
                            results.push(result);
                        }
                    }

                    // Function Declarations
                    else if (node.type === 'FunctionDeclaration') {
                        if (node.id && node.id.type === 'Identifier' && node.id.name) {
                            result = {
                                name: node.id.name,  // var FUNC_VAR_NAME = ....
                                function_node: node  // FunctionExpression
                            };

                            log.debug('\n\n:: rewriter.__getFunctionName() - result::');
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
                return resolve({
                    syntax: syntax,           // all syntax
                    functionsNames: results
                });
            }

            reject('CANNOT FIND FUNCTION\'S NAME');
        });
    },

    __insertConsoleLog: function(f_name_result) {
        return new Q.Promise(function (resolve, reject) {
            var result = null;

            log.debug('\n\n:: rewriter.__insertConsoleLog() - f_name_result::');
            log.debug(f_name_result);

            var block_body = f_name_result.function_node.body.body;

            block_body.unshift({
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "console"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "log"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": f_name_result.name + ':',
                    "raw": "'"+ f_name_result.name +":'"
                  },
                  {
                    "type": "Identifier",
                    "name": "arguments"
                  }
                ]
              }
            });

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

    __insertAllConsoleLog: function(f_name_results) {
        var self= this;
        return new Q.Promise(function (resolve, reject) {
            var allSyntax = f_name_results.syntax;
            var allCalls = [];
            f_name_results.functionsNames.forEach(function(functionNameResult) {

                /****** DEBUG ******************************************************************/
                /******************************************************************************/
                var debugSource = functionNameResult;
                var util = require('util');
                var scrubbed = util.inspect(debugSource, {
                  showHidden: true,
                  depth: 3,
                  colors: true
                });

                console.log(
                  '\n>>------------------------------------------------------\n' +
                  '  source: ( ' + __filename + ' )'                             +
                  '\n  ------------------------------------------------------\n' +
                  '  $ functionNameResult'                                                     +
                  '\n  ------------------------------------------------------\n' +
                     scrubbed                                                    +
                  '\n<<------------------------------------------------------\n'
                );

                /******************************************************************************/
                /****** \DEBUG ***************************************************************/



                allCalls.push(self.__insertAllConsoleLog({
                    syntax: allSyntax,
                    name: functionNameResult.name,
                    function_node: functionNameResult.function_node
                }));
            });

            return Q.all(allCalls);
        });
    },

};
