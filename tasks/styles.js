var gulp = require('gulp');
var cache = require('gulp-cached');
var remember = require('gulp-remember');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var gulpif = require('gulp-if');

var production = require('../gulpfile');

gulp.task('styles', function () {
	return gulp.src([
		'site/src/scss/reset.css',
		'site/src/scss/style.scss'
	])
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(cache('styles'))
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade:  false
		}))
		.pipe(remember('styles'))
		.pipe(concat('style.css'))
		.pipe(gulpif(production, csso()))
		.pipe(gulp.dest('site/assets/css/'));
});
