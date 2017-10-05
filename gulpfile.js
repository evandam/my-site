'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./mysite/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({includePaths: ['node_modules']}).on('error', console.error))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./mysite/static/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./mysite/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch'])
