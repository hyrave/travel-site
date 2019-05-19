const gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('html', function(done) {
    console.log("imagine something useful being run in html here");
    done();
});

gulp.task('styles', function(done) {
    //console.log("css task running here");
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
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
    watch('./app/index.html', {usePolling: true },  gulp.series('html'));
    watch('./app/assets/styles/*.css', {usePolling: true }, gulp.series('styles'));
});
