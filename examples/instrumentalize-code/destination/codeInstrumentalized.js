// this comment will be preserved
var f1 = function (a, b) {
        var splice = Array.prototype.splice;
    var debugSource = splice.call(arguments, 0);
    var util = require('util');
    var scrubbed = util.inspect(debugSource, {
        showHidden: true,
        depth: 3,
        colors: true
    });
    console.log('\n>>------------------------------------------------------\n' + '  source: ( ' + __filename + ' )' + '\n  ------------------------------------------------------\n' + '    f1()' + '\n    ----------------------------------------------------\n    arguments: ' + scrubbed + '\n<<------------------------------------------------------\n');
    return a + b;
};
var f2 = function (a) {
        var splice = Array.prototype.splice;
    var debugSource = splice.call(arguments, 0);
    var util = require('util');
    var scrubbed = util.inspect(debugSource, {
        showHidden: true,
        depth: 3,
        colors: true
    });
    console.log('\n>>------------------------------------------------------\n' + '  source: ( ' + __filename + ' )' + '\n  ------------------------------------------------------\n' + '    f2()' + '\n    ----------------------------------------------------\n    arguments: ' + scrubbed + '\n<<------------------------------------------------------\n');
    return a;
};
var f3 = function (a, b, c) {
        var splice = Array.prototype.splice;
    var debugSource = splice.call(arguments, 0);
    var util = require('util');
    var scrubbed = util.inspect(debugSource, {
        showHidden: true,
        depth: 3,
        colors: true
    });
    console.log('\n>>------------------------------------------------------\n' + '  source: ( ' + __filename + ' )' + '\n  ------------------------------------------------------\n' + '    f3()' + '\n    ----------------------------------------------------\n    arguments: ' + scrubbed + '\n<<------------------------------------------------------\n');
    return f1(a, b) + f2(c);
};
var result = f3(1, 2, 3);
console.log('\n>>---------\n result:', result, '\n>>---------\n');