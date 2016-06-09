console.log('Starting API Test for GET Favorites');
var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

var supertest = require('supertest');
/*var server = supertest('http://lazyfoodie.azurewebsites.net/');
*/
var server = supertest('http://localhost:8080/');

// SERVER FAVORITE UNIT test begin
describe('Test GET Favorites', function () {
    this.timeout(300000);

    describe('GET /api/favorites', function() {
        var requestResult;
        var response;
        before(function(done) {
            server.get('/api/favorites/')
            .end(function (err, res) {
                if (err) return done(err);
                requestResult = res.body;
                response = res;
                done();
            });
        });

        it('Should return an array object with at least 1 object', function(done){
            expect(response).to.have.status(200);
            expect(requestResult).to.be.an.object;
            expect(requestResult).to.have.length.above(0);
            expect(response).to.have.headers;
            done();
        });
        it('The first entry in the array has known properties', function(done){
            expect(requestResult[0]).to.include.keys('imageUrl');
            expect(response).to.have.deep.property('body[0].imageUrl', 'https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c');
            expect(requestResult[0]).to.include.keys('name');
            expect(response).to.have.deep.property('body[0].name', 'Guacamole');            
            expect(response.body).to.not.be.a.string;
            done();
        });

        it('The elements in the array have the expecte properties', function(done){
            expect(response.body).to.satisfy(
                function (body) {
                    for (var i = 0; i < body.length; i++) {
                        expect(body[i]).to.have.property('_id');
                        expect(body[i]).to.have.property('imageUrl').to.have.length.above(7);
                        expect(body[i]).to.have.property('name').to.have.length.above(3);
                        expect(body[i]).to.have.property('userId').to.have.length.above(5);
                        expect(body[i]).to.have.property('imageUrl').that.is.a('String');
                        expect(body[i]).to.have.property('name').that.is.a('String');
                        expect(body[i]).to.have.property('userId').that.is.a('String');
                    }
                    return true;
                });
            done();
        }); 
    });
});      