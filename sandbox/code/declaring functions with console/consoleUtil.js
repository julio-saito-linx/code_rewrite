console.log('\n>>------------------------------------------------------\n' +
            '  __function_name__()' +
            '      at (__file_name__:NUM_LINE:NUM_COLUMN)' +
            '\n    ----------------------------------------------------\n' +
            '    arguments: ' + require('util').inspect(Array.prototype.splice.call(arguments, 0), { showHidden: true, depth: 3, colors: true }) +
            '\n<<------------------------------------------------------\n');
