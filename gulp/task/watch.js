const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function() {
    notify: false,
    browserSync.init({ 
        server: {
            baseDir: "app"
        }
    });    
    watch('./app/index.html', {usePolling: true }, function () {
        browserSync.reload();
    });
    watch('./app/assets/**/*.css', {usePolling: true }, gulp.series('cssInject', gulp.parallel('styles')));
});

gulp.task('cssInject', function(done) {
    return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
    done();
});