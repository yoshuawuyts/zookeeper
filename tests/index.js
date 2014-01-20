/**
 * Module dependencies
 */
 
var fixtures = require('./fixtures/fixtures');
var Backbone = require('backbone');
var should = require('should');
var sinon = require('sinon');
var app = require('../build/scripts/scripts.js')

describe("Application", function() {
  it("creates a global variable for the name space", function () {
    app.should.exist;
  })
})