'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var path = require('./config.json');
var watch = require('gulp-watch');
var mocha = require('gulp-mocha');
var karma = require('gulp-karma');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('tests', function() {

/*
  gulp.src(path.tests.src)

    // run tests
    .pipe(mocha({
    ui: 'bdd',
    reporter: 'dot',
    globals: []
  }));
*/

  return gulp.src(path.tests.src)
    .pipe(karma({
      action: 'run',
      basePath: '',
      frameworks: ['mocha'],
      reporters: ['dots'],
      port: 9876,
      colors: true,
      autoWatch: false,
      browsers: ['PhantomJS'],
      captureTimeout: 60000,

    }));


});