'use strict';

/**
 * Module dependencies
 */

var path = require('./config.json');
var gulp = require('gulp');
var watch = require('gulp-watch');
var esformatter = require('gulp-esformatter');
var eslint = require('gulp-eslint');
var eslintStylish = require('eslint-stylish');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('lint', function() {
 
  // api
  gulp.src(path.api.src)
      .pipe(watch(function(files) {
      return files
        .pipe(esformatter())
        .pipe(eslint())
        .pipe(eslint.format(eslintStylish));
    }));

  // modules
  gulp.src(path.modules.src)
      .pipe(watch(function(files) {
      return files
        .pipe(esformatter())
        .pipe(eslint())
        .pipe(eslint.format(eslintStylish));
    }));

  // tasks
  gulp.src(path.tasks.src)
      .pipe(watch(function(files) {
      return files
.pipe(esformatter())
        .pipe(eslint())
        .pipe(eslint.format(eslintStylish));
    }));

  // tests
  gulp.src(path.tests.src)
      .pipe(watch(function(files) {
      return files
        .pipe(esformatter())
        .pipe(eslint())
        .pipe(eslint.format(eslintStylish));
    }));

});