var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function () {
    return gulp.src(jsFiles)
        .pipe(jshint()).pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }));
});

gulp.task('serve', ['style'], function (err) {
    var options = {
        script: 'server.js',
        watch: jsFiles
    };
    return nodemon(options).on('restart', function () {
        console.log('restarting server');
    });
});