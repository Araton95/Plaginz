var gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch('site/src/js/main.js', ['scripts.app']);
	gulp.watch('site/src/js/vendor/*.js', ['scripts.vendor']);
	gulp.watch('site/src/images/*', ['images']);
	gulp.watch('site/src/css/*.css', ['styles']);
	gulp.watch('site/src/css/*.less', ['styles']);
});
