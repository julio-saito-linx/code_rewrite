'use strict';

var FS = require('q-io/fs');
var parser = require('./parser');
var generator = require('./generator');
var Q = require('q');
var estraverse = require('estraverse');


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
        .then(self.__findFunctionBlockArray)
        .then(self.__insertConsoleLog)
        .then(self.__generateCode)
        .then(self.__writeFile)
        .catch(function(err) {
            console.log('\n>>---------\n err.stack:', err.stack, '\n>>---------\n');
        });
    },

    __getFunctionName: function(syntax) {
        return new Q.Promise(function (resolve, reject) {
            estraverse.traverse(syntax, {
              enter: function(node){

                // Function Expressions
                if (node.type === 'VariableDeclarator') {
                    if (node.init && node.init.type === 'FunctionExpression') {
                        return resolve({
                            name: node.id.name,   // var FUNC_VAR_NAME = ....
                            node: node.init       // FunctionExpression
                        });
                    }
                }

                // Function Declarations
                if (node.type === 'FunctionDeclaration') {
                    if (node.id && node.id.type === 'Identifier' && node.id.name) {
                        return resolve({
                            name: node.id.name,   //function NAME () {}
                            node: node            //FunctionExpression
                        });
                    }
                }
              }
            });
            reject('CANNOT FIND FUNCTION\'S NAME');
        });
    },

    __findFunctionBlockArray: function(f_node_result) {
        return new Q.Promise(function (resolve, reject) {

            var block_body = f_node_result.node.body && f_node_result.node.body.body;

            if (block_body) {
                return resolve({
                    name      : f_node_result.name,    // function's "name"
                    node      : f_node_result.node,    // FunctionExpression
                    block_body: block_body             // function's block array
                });
            }
            else{
                return reject('CANNOT FIND FUNCTION\'S BLOCK ARRAY');
            }

        });
    },

};