const _ = require('lodash');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

//const eslintConfig = require('./config');

gulp.task('test', () => {
  const testDirectories = [
    'test/*',
    'test/*/*'
  ];
  _.each(testDirectories, (path) => {
    const test = gulp.src(path, {read: false});
    gulp
      .src(path, {read: false})
      .pipe(mocha({}));
  });
});

gulp.task('lint', () => {
  gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
})

gulp.task('default', ['test']);
