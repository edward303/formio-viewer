var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

gulp.task('clean', () => del(['dist/lib/*', 'dist/index.html']));
gulp.task('html', () => gulp.src('./src/index.html').pipe(plugins.htmlmin({
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true
})).pipe(gulp.dest('dist')));
// gulp.task('assets', () => gulp.src('./src/assets/**/*').pipe(gulp.dest('dist/assets')));
gulp.task('formiojs', () => gulp.src('./node_modules/formiojs/dist/**/*').pipe(gulp.dest('dist/lib/formiojs')));
gulp.task('seamless', () => gulp.src('./node_modules/seamless/build/**/*').pipe(gulp.dest('dist/lib/seamless')));
gulp.task('bootstrap', () => gulp.src('./node_modules/bootstrap/dist/**/*').pipe(gulp.dest('dist/lib/bootstrap')));
gulp.task('bootswatch', () => gulp.src('./node_modules/bootswatch/**/*').pipe(gulp.dest('dist/lib/bootswatch')));
gulp.task('fa', () => gulp.src('./node_modules/font-awesome/**/*').pipe(gulp.dest('dist/lib/font-awesome')));
gulp.task('build', ['clean'], function() {
  gulp.start([
    'html',
    // 'assets',
    'formiojs',
    'seamless',
    'bootstrap',
    'bootswatch',
    'fa'
  ]);
});
