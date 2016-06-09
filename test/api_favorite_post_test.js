console.log('Starting API Test for POST Favorite');
var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');
var mongoose = require('mongoose')

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

var supertest = require('supertest');
/*var server = supertest('http://lazyfoodie.azurewebsites.net/');
*/
var server = supertest('http://localhost:8080');
var app = require('server');

// SERVER FAVORITE UNIT test begin
describe('Test POSTS', function () {
    this.timeout(300000);

    describe('POST /api/post', function() {
        var requestResult;
        var response;
        before(function(done) {
            server.post('/api/post')
            .send({ userId: '3434', name: 'test', imageUrl: 'www.blob.com', recipeId: '444'})
            .end(function (err, res) {
                if (err) return done(err);
                requestResult = res.body;
                response = res;
                        console.log(response.body);
                done();
            });
        });


      it('should add a SINGLE favorite on /api/post POST', function(done) {
        expect(response).to.have.status(200);
        expect(requestResult).to.be.an.object;
        done();
      });
    });      
});
  /*  describe('POST /api/post', function() {
        it('should post a favorite', function(done) {
           chai.request(app)
          .post('/api/post')
          .send({ 'userId': '3434', 'name': 'test', 'imageUrl': 'www.blob.com', 'recipeId': '444'})
          .end(function(err, res){
                //console.log(res.should.have);
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('SUCCESS');
                res.body.SUCCESS.should.be.a('object');
                res.body.SUCCESS.should.have.property('recipeId');
                res.body.SUCCESS.should.have.property('imageUrl');
                res.body.SUCCESS.should.have.property('name');
                res.body.SUCCESS.should.have.property('userId');
                res.body.SUCCESS.should.have.property('_id');
                res.body.SUCCESS.name.should.equal('test');
                res.body.SUCCESS.imageUrl.should.equal('www.blob.com');
                res.body.SUCCESS.recipeId.should.equal('444');
                res.body.SUCCESS.userId.should.equal('3434');
                done();
            });
         });
    });    */
//});  