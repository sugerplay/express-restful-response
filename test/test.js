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