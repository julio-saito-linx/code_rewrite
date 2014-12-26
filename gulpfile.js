var gulp = require('gulp');
var clean = require('gulp-clean');
var yargs = require('yargs');
var sources = ['src/**/*.js'];
var testSources = ['test/**/*-test.js'];
var allSources = sources.concat(testSources);

gulp.task('clean', function () {
    return gulp.src('lib', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('default', ['test']);

/**
 * mocha + watch
 */
gulp.task('test', ['mocha', 'test-watch']);
gulp.task('test-watch', function() {
    gulp.watch(allSources, ['mocha']);
});
gulp.task('mocha', function() {
    var mocha = require('gulp-mocha');
    var gutil = require('gulp-util');

    return gulp.src(testSources, { read: false })
        .pipe( mocha( {
            reporter: 'spec', growl: 'true', grep: yargs.argv.grep, timeout: 4000
        } ))
        //.on('error', gutil.log);
});
