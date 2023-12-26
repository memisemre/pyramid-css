const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const header = require('gulp-header');

const headerComment = `
/*
 * Pyramid CSS
 * @2023
 */
`;

function styles(done) {
  gulp.series(sassTask, minifycss, addHeader)(function() {
    done();
  });
}

function sassTask() {
  return gulp.src(['sass/*.scss', 'sass/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ basename: 'pyramid' }))
    .pipe(gulp.dest('dist/styles'));
}

function minifycss() {
  return gulp.src('dist/styles/pyramid.css')
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/styles'));
}

function addHeader() {
  return gulp.src('dist/styles/*.css')
    .pipe(header(headerComment))
    .pipe(gulp.dest('dist/styles'));
}

function watch() {
  gulp.watch(['sass/*.scss', 'sass/**/*.scss'], gulp.series(styles));
}

exports.styles = styles;
exports.default = gulp.series(styles, watch);
