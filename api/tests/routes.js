var should = require('should');
var app = require('../server');
var request = require('supertest').agent(app.listen());

// exports
module.exports = function() {

  describe('serve(root)', function() {
    describe('when there are no tasks', function(){
      it('should return html', function(done){
        request
        .get('/')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done)
      })
    })

    describe('when creating a task', function(){
      it('should have a valid url', function(done){
        request
        .get('/:id/new')
        .expect(200, done)
      }),

      it('should accept a post', function(done){
        request
        .expect(200, done)
      }),

      it('should render the post data', function(done){
        request
        .expect(200, done)
      })
    })
  })
}