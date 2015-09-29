var express = require('express'),
    response = require('../index.js'),
    app = module.exports = express();
    
app.use(response.restfulEnd);
    
app.get('/correct', function (req, res) {
    res.restfulEnd({
        message: 'Correct!'
    }, {
        status_code: 200
    });
});

app.get('/network_error', function (req, res) {
    res.restfulEnd({
        message: 'status 500 doesn`t return output.'
    }, {
        status_code: 500
    });
});

app.get('/jsonp', function (req, res) {
    res.restfulEnd({
        message: 'JSON with padding'
    }, {
        status_code: 200,
        jsonp: true
    });
});

app.get('/no_content', function (req, res) {
    res.restfulEnd({
        message: 'status 204 doesn`t return output.'
    }, {
        status_code: 204
    });
});

app.listen(3000);