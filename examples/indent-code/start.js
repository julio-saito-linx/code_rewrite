var rewriter = require('../../src/rewriter');

var sourceFilePath = __dirname + '/source/codeToIndent.js';
var destinationFilePath = __dirname + '/destination/codeIndented.js';
rewriter.rewrite(sourceFilePath, destinationFilePath);