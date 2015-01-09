// this comment will be preserved
var f_concat = function (a, b) {
        var splice = Array.prototype.splice;
    var debugSource = splice.call(arguments, 0);
    var util = require('util');
    var scrubbed = util.inspect(debugSource, {
        showHidden: true,
        depth: 3,
        colors: true
    });
    console.log('\n>>------------------------------------------------------\n' + '  source: ( ' + __filename + ' )' + '\n  ------------------------------------------------------\n' + '    f_concat() 2' + '\n    ----------------------------------------------------\n    arguments: ' + scrubbed + '\n<<------------------------------------------------------\n');
    return [
        a,
        b
    ];
};
var f_just_return = function (a) {
        var splice = Array.prototype.splice;
    var debugSource = splice.call(arguments, 0);
    var util = require('util');
    var scrubbed = util.inspect(debugSource, {
        showHidden: true,
        depth: 3,
        colors: true
    });
    console.log('\n>>------------------------------------------------------\n' + '  source: ( ' + __filename + ' )' + '\n  ------------------------------------------------------\n' + '    f_just_return() 7' + '\n    ----------------------------------------------------\n    arguments: ' + scrubbed + '\n<<------------------------------------------------------\n');
    return a;
};
function concatAll(a, b, c) {
        var splice = Array.prototype.splice;
    var debugSource = splice.call(arguments, 0);
    var util = require('util');
    var scrubbed = util.inspect(debugSource, {
        showHidden: true,
        depth: 3,
        colors: true
    });
    console.log('\n>>------------------------------------------------------\n' + '  source: ( ' + __filename + ' )' + '\n  ------------------------------------------------------\n' + '    concatAll() 12' + '\n    ----------------------------------------------------\n    arguments: ' + scrubbed + '\n<<------------------------------------------------------\n');
    return [
        f_concat(a, b),
        f_just_return(c)
    ];
}
var result = concatAll(1, ' 2 ', { name: 'value' });
console.log(result);