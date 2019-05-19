var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('html', function(done) {
    console.log("imagine something useful being run in html here");
    done();
});

gulp.task('styles', function(done) {
    console.log("css task running here");
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
    watch('./app/assets/styles/styles.css', {usePolling: true }, gulp.series('styles'));
});
