'use strict';

var FS = require('q-io/fs');
var path = require('path');
var rewriter = require('../src/rewriter');


//FIXME: refactoring that, a lot!
FS.listTree('code/')
.then(function(files) {
    console.log('\n>>---------\n files:', files, '\n>>---------\n');
    files.forEach(function(file) {
        FS.stat(path.join(__dirname, file))
        .then(function(stats) {
            // console.log('\n>>---------\n stats:', stats, '\n>>---------\n');
            // console.log('\n>>---------\n stats.isFile():', stats.isFile(), '\n>>---------\n');
            if (stats.isFile()) {
                var allPaths = file.split(path.sep);
                // console.log('\n>>---------\n allPaths:', allPaths, '\n>>---------\n');

                var allPath2 = allPaths.splice(1);
                // console.log('\n>>---------\n allPath2:', allPath2, '\n>>---------\n');

                var destinationPath = path.join(__dirname, 'syntax', allPath2[0], allPath2[1]);

                FS.makeTree(path.join(__dirname, 'syntax', allPath2[0])).then(function() {
                    // console.log('\n>>---------\n destinationPath:', destinationPath, '\n>>---------\n');

                    rewriter.writeSyntax(
                        path.join(__dirname, file),
                        destinationPath);

                }).catch(function(err) {
                    console.log('\n>>---------\n err:', err.stack, '\n>>---------\n');
                });

            }
        })
        .catch(function(err) {
            console.log('\n>>---------\n err:', err.stack, '\n>>---------\n');
        });
    });
})
.catch(function(err) {
    console.log('\n>>---------\n err:', err.stack, '\n>>---------\n');
});