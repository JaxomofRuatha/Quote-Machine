const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () =>
  gulp
    .src('./src/sass/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css')));

gulp.task('default', ['sass'], () => {
  gulp.watch('./src/sass/*.scss', ['sass']);
});
