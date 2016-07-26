var gulp = require('gulp'),
	less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require("gulp-plumber"),
    notify = require('gulp-notify'),
    connect = require("gulp-connect"),
    opn = require('opn');

gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
    opn('http://localhost:8080/');
});

gulp.task('less', function () {
  gulp.src('styles/less/*.less')
    .pipe(plumber({errorHandler: notify.onError("Error: CSS")}))
    .pipe(less())
    .pipe(gulp.dest('styles'))
    .pipe(connect.reload())
    .pipe(notify("CSS compiled"));
});

gulp.task('css', function(){
  return gulp.src('styles/style.css')
    .pipe(autoprefixer({
            browsers: ['last 15 versions']
        }))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload())
    .pipe(notify("HTML Refresh"));
});

gulp.task('watch', function(){
	gulp.watch('styles/less/*.less', ['less']);
    gulp.watch('*.html', ['html']);
	//gulp.watch('css/*.css', ['css']);

});

gulp.task('mincss', ['css']);
gulp.task('default', ['connect','less', 'watch']);