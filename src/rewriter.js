'use strict';

var FS = require('q-io/fs');
var parser = require('./parser');
var generator = require('./generator');

module.exports = {
    __readFile: function(fullPath) {
        return FS.read(fullPath, "b");
    },
    __writeFile: function(fullPath, content) {
        return FS.write(fullPath, content);
    },

    __getSyntax: function(content) {
        return parser.parse(content);
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
    }
};