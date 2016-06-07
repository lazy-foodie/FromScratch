console.log('Starting API Test for User');
var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

var supertest = require('supertest');
var server = supertest('http://lazyfoodie.azurewebsites.net/');

// SERVER USER UNIT test begin
describe('Test Users', function () {
    this.timeout(15000);

    describe('GET /api/users', function() {

        var requestResult;
        var response;
        before(function(done) {
            server.get('/api/users/')
            .end(function (err, res) {
                if (err) return done(err);
                requestResult = res.body;
                response = res;
                done();
            });
        });

        it('Should return an array object with at least 1 objects', function(done){
            expect(response).to.have.status(200);
            expect(requestResult).to.be.an.object;
            expect(requestResult).to.have.length.above(0);
            expect(response).to.have.headers;
            done();
        });
        it('The first entry in the array has known properties', function(done){
            expect(requestResult[0]).to.include.keys('firstName');
            expect(response).to.have.deep.property('body[0].firstName', 'Emma');
            expect(response.body).to.not.be.a.string;
            done();
        });

        it('The elements in the array have the expecte properties', function(done){
            expect(response.body).to.satisfy(
                function (body) {
                    for (var i = 0; i < body.length; i++) {
                        expect(body[i]).to.have.property('_id');
                        expect(body[i]).to.have.property('firstName').to.have.length.above(1);
                        expect(body[i]).to.have.property('lastName').to.have.length.above(1);
                        expect(body[i]).to.have.property('email').to.have.length.above(5);
                        expect(body[i]).to.have.property('favorites');
                        expect(body[i]).to.have.property('developer');
                        expect(body[i]).to.have.property('firstName').that.is.a('String');
                        expect(body[i]).to.have.property('lastName').that.is.a('String');
                        expect(body[i]).to.have.property('email').that.is.a('String');
                        expect(body[i]).to.have.property('developer').that.is.a('boolean');
                        expect(body[i]).to.have.property('favorites').that.is.a('Array');
                    }
                    return true;
                });
            done();
        }); 
    });    
    

    describe('GET /api/users/:id', function() {

        var requestResult;
        var response;
        before(function(done) {
            server.get('/api/users/57399eabdcba0f089283c6e1')
            .end(function (err, res) {
                if (err) return done(err);
                requestResult = res.body;
                response = res;
                done();
            });
        });

        it('Should return an object', function(done){
            expect(response).to.have.status(200);
            expect(requestResult).to.be.an.object;
            expect(response).to.have.headers;
            done();
        });
        it('The object has known properties', function(done){
            expect(requestResult).to.include.key('firstName');
            expect(response).to.have.deep.property('body.firstName', 'Emma');
            expect(requestResult).to.include.key('lastName');
            expect(response).to.have.deep.property('body.lastName', 'Ogilvie');
            expect(requestResult).to.include.key('email');
            expect(response.body).to.not.be.a.string;
            done();
        });

        it('The object the expected properties', function(done){
            expect(response.body).to.satisfy(
                function (body) {
                    expect(body).to.have.property('_id');
                    expect(body).to.have.property('firstName').to.have.length.above(1);
                    expect(body).to.have.property('lastName').to.have.length.above(1);
                    expect(body).to.have.property('email').to.have.length.above(5);
                    expect(body).to.have.property('developer');
                    expect(body).to.have.property('favorites');
                    expect(body).to.have.property('firstName').that.is.a('String');
                    expect(body).to.have.property('lastName').that.is.a('String');
                    expect(body).to.have.property('email').that.is.a('String');
                    expect(body).to.have.property('developer').that.is.a('boolean');
                    expect(body).to.have.property('favorites').that.is.a('Array');

                    return true;
                });
            done();
        }); 
    });    
});