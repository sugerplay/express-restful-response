var express = require('express'),
    response = require('../index.js'),
    app = module.exports = express();
    
app.use(response.restfulEnd);
    
app.get('/correct', function (req, res) {
    res.restfulEnd({}, {
        status_code: 200,
        status_msg: 'It`s a message!'
    });
});

app.get('/network_error', function (req, res) {
    res.restfulEnd({}, {
        status_code: 500
    });
});

app.get('/jsonp', function (req, res) {
    res.restfulEnd({}, {
        status_code: 200,
        status_msg: 'It`s a message!',
        jsonp: true
    });
});

app.listen(3000);