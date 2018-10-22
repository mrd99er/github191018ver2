var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('views', function buildHTML() {
    return gulp.src('src/templates/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./dist'))
        // Your options in here.
});

gulp.task('sass', function buildHTML() {
    return gulp.src('src/styles/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('default', function() {
    gulp.start([
        'views',
        'sass'
    ]);
});