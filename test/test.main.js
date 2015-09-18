var express = require('express'),
    response = require('../index.js').response,
    app = module.exports = express();
    
app.get('/correct', function (req, res) {
    response(res, {}, {
        status_code: 200,
        status_msg: 'It`s a message!'
    });
});

app.get('/network_error', function (req, res) {
    response(res, {}, {
        status_code: 500
    });
});

app.get('/jsonp', function (req, res) {
    response(res, {}, {
        status_code: 200,
        status_msg: 'It`s a message!',
        jsonp: true
    });
});

app.listen(3000);