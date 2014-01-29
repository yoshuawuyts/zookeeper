'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var path = require('centurion');
var gulpUtil = require('gulp-util');

try {
  require(path.resolve(__dirname, gulpUtil.env.gulpfile));
} catch (err) {
  console.error('Unable to load %s', gulpUtil.env.gulpfile);
}