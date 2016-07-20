var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function() {
    gulp
        .src('src/templates/**/*.jade')
        .pipe(jade({ "pretty": true }))
        .pipe(gulp.dest('build/development'));
});

gulp.task('copy-assets', function() {
    gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('build/development/css'));
    gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('build/development/js'));
    gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('build/development/js'));
});

gulp.task('default', ['jade', 'copy-assets']);
