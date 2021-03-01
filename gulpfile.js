const gulp = require('gulp');
const less = require('gulp-less');
const watch = require('gulp-watch');
 
gulp.task('less-compile', function(){
    return gulp.src('./public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
})

gulp.task('watch', function() {
    gulp.watch('./public/less/**/*.less', gulp.series('less-compile'))
})