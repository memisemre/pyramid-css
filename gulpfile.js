const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const header = require('gulp-header');
const {
    HEADER_COMMENT,
    SASS_PATH,
    OUTPUT_FOLDER,
    OUTPUT_FILE_FULL_NAME,
    BASE_NAME,
    ALL_CSS_PATH
} = require('./gulp.config');

function styles(done) {
  gulp.series(sassTask, minifycss, addHeader)(function() {
    done();
  });
}

function sassTask() {
  return gulp.src(SASS_PATH)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ basename: BASE_NAME }))
    .pipe(gulp.dest(OUTPUT_FOLDER));
}

function minifycss() {
  return gulp.src(OUTPUT_FILE_FULL_NAME)
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(OUTPUT_FOLDER));
}

function addHeader() {
  return gulp.src(ALL_CSS_PATH)
    .pipe(header(HEADER_COMMENT))
    .pipe(gulp.dest(OUTPUT_FOLDER));
}

function watch() {
  gulp.watch(SASS_PATH, gulp.series(styles));
}

exports.styles = styles;
exports.default = gulp.series(styles, watch);
