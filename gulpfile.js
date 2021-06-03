
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // we want to run "sass css/app.scss app.css --watch"
  return gulp.src("css/app.scss")
    .pipe(sass().on('error', sass.logError))
});
