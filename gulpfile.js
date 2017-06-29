const _ = require('lodash');
const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', () => {
  const testDirectories = [
    'test/*',
    'test/*/*'
  ];
  _.each(testDirectories, (path) => {
    const test = gulp.src(path, {read: false});
    console.log('----test', test);
    gulp
      .src(path, {read: false})
      .pipe(mocha({reporter: 'nyan'}));
  });
});

gulp.task('default', ['test']);
