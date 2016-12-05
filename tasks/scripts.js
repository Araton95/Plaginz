var gulp = require('gulp');
var cache = require('gulp-cached');
var remember = require('gulp-remember');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
//var express = require('express');

var production = require('../gulpfile');

gulp.task('scripts', ['scripts.app', 'scripts.vendor']);

gulp.task('scripts.app', function () {
    return gulp.src([
        'site/src/js/Vendor/jquery-1.11.3.min.js',
        'site/src/js/Vendor/jquery.lazyload.min.js',
        'site/src/js/Main.js'
    ])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(cache('scripts'))
        .pipe(sourcemaps.init())
        .pipe(remember('scripts'))
        .pipe(concat('app.js', {newLine: ';\n'}))
        .pipe(gulpif(production, uglify()))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('site/assets/js/'));
});

gulp.task('scripts.vendor', function () {
    return gulp.src([
        'site/src/js/Vendor/jquery-ui-1.10.2.custom.min.js',
        'site/src/js/Vendor/filter.min.js',
        'site/src/js/Vendor/movies.js',
        'site/src/js/Vendor/pagination.js' ,
        'site/src/js/Vendor/*.js'
    ])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(concat('vendor-bundle.js', {newLine: ';\n'}))
        .pipe(gulpif(production, uglify()))
        .pipe(gulp.dest('site/assets/js/'));
});
