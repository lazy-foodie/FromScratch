'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    supertest = require("supertest");
    // Favorite = mongoose.model('Favorite');

// This agent refers to PORT where program is runninng.
var client = supertest.agent("http://localhost:3000");
var server = supertest.agent("http://localhost:8080");

// UNIT test begin

describe("Server unit test",function(){
    var resResult;
    var response;

    // before(function(done) {
    //     client
    //     .get('/api/nerds')
    //     .expect("Content-type",/json/)
    //     .expect(200)
    //     .end(function(err,res){
    //       resResult = res.body;
    //       response = res;
    //       // expect(err).to.be.null;
    //       // expect(res).to.have.status(200);
    //     // res.status.should.equal(200);
    //       done();
    //     });
    // });
    // calling nerd api
  it("should return nerds object",function(done){
    client
    .get('/api/nerds')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });
    // it ("should return an array of more than 1 object", function() {
    //   expect(response).to.have.status(200);
    //   expect(response).to.have.an.object;
    //   expect(response).to.have.length.above(1);
    //   expect(response).to.have.header;
    // });
});

describe("Client unit test",function(){

    // #1 should return home page
    it("should return home page",function(done){
        // calling home page api
        server
        .get("/")
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
          // HTTP status should be 200
          res.status.should.equal(200);
          done();
        });
    });

    it("should return one recipe page",function(done){
        client
        .get('/recipes/Flat-Belly-Detox-water-1606683')
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err,res){
          res.status.should.equal(200);
          done();
        });
    });

    it("should return favorite page",function(done){
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



/**
 * Unit tests
 */
// describe('Favorite Model', function() {

//     describe('Saving', function() {
//         it('saves new record', function(done) {
//             var favorite = new Favorite({
//                 name: 'Flat Belly Detox water',
//                 recipeId: 'Flat-Belly-Detox-water-1606683',
//                 imageUrl: "https://lh3.googleusercontent.com/nJplGzIVN_M5vplJPPlaujuPtirBefbCkQWbknOAtrpkxWrRHzvOWA1rxENELor9Chld3wYEfkaQlPFJspfOKA=s200-c",
//             });

//             favorite.save(function(err, saved) {
//                 should.not.exist(err);
//                 done();
//             });
//         });

//         it('throws validation error when recipeId is empty', function(done) {   
//             var favorite = new Favorite({
//                 name: 'Flat Belly Detox water'
//             });

//             favorite.save(function(err) {
//                 should.exist(err);
//                 err.errors.name.message.should.equal('recipeId cannot be blank');
//                 done();
//             });
//         });

//         it('throws validation error for duplicate recipe id', function(done) {
//             var favorite = new Favorite({
//                 name: 'Flat Belly Detox water',
//                 recipeId: 'Flat-Belly-Detox-water-1606683',
//                 imageUrl: "https://lh3.googleusercontent.com/nJplGzIVN_M5vplJPPlaujuPtirBefbCkQWbknOAtrpkxWrRHzvOWA1rxENELor9Chld3wYEfkaQlPFJspfOKA=s200-c",
//             });

//             favorite.save(function(err) {
//                 should.not.exist(err);

//                 var duplicate = new Favorite({
//                     recipeId: 'Flat-Belly-Detox-water-1606683',
//                 });

//                 duplicate.save(function(err) {
//                     err.err.indexOf('$recipeId').should.not.equal(-1);
//                     err.err.indexOf('duplicate key error').should.not.equal(-1);
//                     should.exist(err);
//                     done();
//                 });
//             });
//         });
//     });

//     afterEach(function(done) { 
//         // NB this deletes ALL favorites (but is run against a test database)
//         Favorite.remove().exec();
//         done();
//     });
// });