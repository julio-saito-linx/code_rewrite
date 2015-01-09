// this comment will be preserved
var f_concat = function (a, b) {
        console.log('\n>>------------------------------------------------------\n' + '  f_concat()' + '      at (/home/julio/_git/code_rewrite/examples/instrumentalize-code/source/codeToInstrumentalize.js:2:4)' + '\n    ----------------------------------------------------\n' + '    arguments: ' + require('util').inspect(Array.prototype.splice.call(arguments, 0), {
        showHidden: true,
        depth: 3,
        colors: true
    }) + '\n<<------------------------------------------------------\n');
    return [
        a,
        b
    ];
};
var f_just_return = function (a) {
        console.log('\n>>------------------------------------------------------\n' + '  f_just_return()' + '      at (/home/julio/_git/code_rewrite/examples/instrumentalize-code/source/codeToInstrumentalize.js:7:4)' + '\n    ----------------------------------------------------\n' + '    arguments: ' + require('util').inspect(Array.prototype.splice.call(arguments, 0), {
        showHidden: true,
        depth: 3,
        colors: true
    }) + '\n<<------------------------------------------------------\n');
    return a;
};
function concatAll(a, b, c) {
        console.log('\n>>------------------------------------------------------\n' + '  concatAll()' + '      at (/home/julio/_git/code_rewrite/examples/instrumentalize-code/source/codeToInstrumentalize.js:12:0)' + '\n    ----------------------------------------------------\n' + '    arguments: ' + require('util').inspect(Array.prototype.splice.call(arguments, 0), {
        showHidden: true,
        depth: 3,
        colors: true
    }) + '\n<<------------------------------------------------------\n');
    return [
        f_concat(a, b),
        f_just_return(c)
    ];
}
var result = concatAll(1, ' 2 ', { name: 'value' });
console.log(result);