require('./test.main.js');

var should = require('should'),
  Browser = require('zombie'),
  browser = new Browser,
  request = require('request');

describe('Using package in express 4.x', function() {
  describe('Status-code', function () {
    it('should response for status-code 200', function (done) {
      var url = 'http://localhost:3000/correct'
      var opts = {
        url: url,
        method: 'get'
      }
      
      request(opts, function (err, res, body) {
        should.equal(res.statusCode, 200);
        done();
      });
    });
    
    it('should response for status-code 500', function (done) {
      browser.visit('http://localhost:3000/network_error', function () {
        should.equal(browser.statusCode, 500);
        done();
      });
    });
    
    it('should response for post request', function (done) {
      // browser.visit('http://localhost:3000/post', function () {
      //   should.equal(browser.statusCode, 500);
      //   done();
      // });
      
      var url = 'http://localhost:3000/post'
      var opts = {
        url: url,
        method: 'post'
      }
      
      request(opts, function (err, res, body) {
        should.not.exist(err);
        should.equal(res.statusCode, 201);
        should.equal(res.headers.location, '/post/20');
        done();
      });
    });
  });
  
  describe('output', function () {
    it('should response output message for status-code 200', function (done) {
      browser.visit('http://localhost:3000/correct', function () {
        var out = JSON.parse(browser.text());
        should.exist(out.message);
        done();
      });
    });
    
    it('should response output message for status-code 500', function (done) {
      browser.visit('http://localhost:3000/network_error', function () {
        var out = JSON.parse(browser.text());
        should.exist(out.message);
        done();
      });
    });
    
    it('should response no output for status-code 204', function (done) {
      browser.visit('http://localhost:3000/no_content', function () {
        should.equal(browser.text().length, 0);
        done();
      });
    });
  });
  
  describe('jsonp', function () {
    it('should response with jsonp', function (done) {
      browser.visit('http://localhost:3000/jsonp?callback=cb', function () {
        var f = new Function("cb", browser.text());
        
        f(function (out) {
          should.exist(out.message);
          done();
        });
      });
    });
  });
    
});