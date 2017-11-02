import gulp from "gulp";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";

gulp.task('browserify', function(){
    return browserify('./src/index.js')
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});