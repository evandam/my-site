'use strict';

let gulp = require('gulp');
let spawn = require('child_process').spawn;
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let sourcemaps = require('gulp-sourcemaps');
let moduleImporter = require('sass-module-importer');

gulp.task('sass', function() {
    /* TBD if best way...
    Compile SASS across all Django apps into one css file.
    Dump the output into our core app and let manage.py collectstatic on it.
    */
    return gulp.src('**/static/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({importer: moduleImporter()}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./core/static/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('**/static/sass/**/*.scss', ['sass']);
});

gulp.task('serve:backend', function() {
    let port = process.env.PORT || 8000;
    process.env.PYTHONUNBUFFERED = 1;
    spawn('./manage.py', ['collectstatic', '--no-input'], {stdio: 'inherit'});
    spawn('./manage.py', ['runserver', port], {stdio: 'inherit'});
});

gulp.task('default', ['sass', 'sass:watch', 'serve:backend'])
