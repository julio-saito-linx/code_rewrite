var splice = Array.prototype.splice;
var debugSource = splice.call(arguments, 0);
var util = require('util');
var scrubbed = util.inspect(debugSource, {
    showHidden: true,
    depth: 3,
    colors: true
});
console.log('\n>>------------------------------------------------------\n' + '  source: ( ' + __filename + ' )' + '\n  ------------------------------------------------------\n' + '    f1()' + '\n    ----------------------------------------------------\n    arguments: ' + scrubbed + '\n<<------------------------------------------------------\n');
