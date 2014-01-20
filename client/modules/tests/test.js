/**
 * Module dependencies
 */

var Backbone = require('backbone');
var should = require('should');
var sinon = require('sinon');

var app = require('./index.js')

module.exports = function() {

  describe("Application", function() {
    it("creates a global variable for the name space", function () {
      app.should.exist;
    })
  })

}