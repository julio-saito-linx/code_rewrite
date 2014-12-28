var rewriter = require('../../src/rewriter');

var sourceFilePath = __dirname + '/source/codeToInstrumentalize.js';
var destinationFilePath = __dirname + '/destination/codeInstrumentalized.js';

rewriter.instrumentalize(sourceFilePath, destinationFilePath);
