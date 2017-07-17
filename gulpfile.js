const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('style', () => {
  return gulp.src('public/stylesheets/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('public/build'));
});


gulp.task('watch', () => {
  return gulp.watch('public/stylesheets/*.css', ['style']);
});
