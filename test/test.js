require('./test.main.js');

var should = require('should'),
    Browser = require('zombie'),
    browser = new Browser;

describe('Using package in express 4.x', function() {
    describe('Status-code', function () {
        it('should response for status-code 200', function (done) {
            browser.visit('http://localhost:3000/correct', function () {
                should.equal(browser.statusCode, 200);
                done();
            });
        });
        
        it('should response for status-code 500', function (done) {
            browser.visit('http://localhost:3000/network_error', function () {
                should.equal(browser.statusCode, 500);
                done();
            });
        });
    });
    
    describe('Status-msg', function () {
        it('should response with no status-msg', function (done) {
            browser.visit('http://localhost:3000/correct', function () {
                var result = JSON.parse(browser.text());
                should.exist(result.message);
                done();
            });
        });
        
        it('should response status-msg', function (done) {
            browser.visit('http://localhost:3000/network_error', function () {
                var result = JSON.parse(browser.text());
                should.not.exist(result.message);
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