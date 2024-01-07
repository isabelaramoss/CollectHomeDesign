const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass(){
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}


exports.default = function(){
  gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}

/* 
gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
  gulp.watch('./src/images', {ignoreInitial: false}, gulp.series(comprimeImagens));
  gulp.watch('./src/*.html', {ignoreInitial: false}, gulp.series(comprimeHtml));

*/