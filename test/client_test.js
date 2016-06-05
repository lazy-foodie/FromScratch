'use strict';

console.log('Starting Client Test');
var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

var supertest = require('supertest');
var client = supertest('http://lazyfoodie.azurewebsites.net/');

// CLIENT UNIT test begin
describe("Client unit test",function(){

    // #1 should return home page
    it("GET / should return home page",function(done){
        // calling home page api
        client
        .get("/")
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
          // HTTP status should be 200
          res.status.should.equal(200);
          done();
        });
    });

    it("GET /recipes/Flat-Belly-Detox-water-1606683 should return one recipe page",function(done){
        client
        .get('/recipes/Flat-Belly-Detox-water-1606683')
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err,res){
          res.status.should.equal(200);
          done();
        });
    });

    it("GET /favRecipes should return favorite page",function(done){
        client
        .get('/favRecipes')
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err,res){
          res.status.should.equal(200);
          done();
        });
    });
});
