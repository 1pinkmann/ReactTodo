const gulp = require('gulp');
const less = require('gulp-less');
const watch = require('gulp-watch');

gulp.task('less-compile', function () {
    return gulp.src('./src/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css'));
})

gulp.task('watch', function () {
    gulp.watch('./src/**/*.less', gulp.series('less-compile'))
})