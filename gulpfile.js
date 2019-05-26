const gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('html', function(done) {
    browserSync.reload();
    console.log("imagine something useful being run in html here");
    done();
});

gulp.task('styles', function(done) {
    //console.log("css task running here");
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
    done();
})
/*

gulp.task('default', function(done) {
    console.log("horray initialize default");
    done();
});
*/

gulp.task('default', gulp.series((done) => { 
    console.log("horray initialize default");
    done();
}));

gulp.task('watch', function() {
    notify: false,
    browserSync.init({ 
        server: {
            baseDir: "app"
        }
    });    
    watch('./app/index.html', {usePolling: true }, gulp.series('html'));
    watch('./app/assets/**/*.css', {usePolling: true }, gulp.series('cssInject', gulp.parallel('styles')));
});

gulp.task('cssInject', function(done) {
    return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
    done();
});