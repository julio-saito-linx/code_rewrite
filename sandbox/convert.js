'use strict';

var FS = require('q-io/fs');
var path = require('path');
var rewriter = require('../src/rewriter');
var Q = require('q');


var generateSyntaxForAllFiles = function(files) {
    return new Q.Promise(function (resolve, reject, notify) {
        var allSyntaxes = [];
        files.forEach(function(file) {

            // get info from files
            FS.stat(path.join(__dirname, file))
            .then(function(stats) {

                if (stats.isFile()) {
                    // remove first path
                    var allPaths = file.split(path.sep);
                    var allPath2 = allPaths.splice(1);
                    var destinationPath = path.join(__dirname, 'syntax', allPath2[0], allPath2[1]);

                    // create new "syntax" folder
                    FS.makeTree(path.join(__dirname, 'syntax', allPath2[0]))
                    .then(function() {

                    // write syntax
                    rewriter.writeSyntax(path.join(__dirname, file), destinationPath)
                    .then(function() {
                        allSyntaxes.push(destinationPath);
                    });

                    }).catch(function(err) {
                        reject(err);
                    });
                }
            })
            .catch(function(err) {
                reject(err);
            });
        });

        resolve(allSyntaxes);

    });
};

// list all files from "code/"
FS.listTree('code/').then(generateSyntaxForAllFiles)
.catch(function(err) {
    console.log('\n>>---------\n err:', err.stack, '\n>>---------\n');
});
