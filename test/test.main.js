var express = require('express'),
    response = require('../index.js'),
    app = module.exports = express();
    
app.use( response.restfulEnd({}) );
    
app.get('/correct', function (req, res) {
  res.restfulEnd(200, { message: 'Correct!' });
});

app.post('/post', function (req, res) {
  res.postEnd({ message: 'Correct!' }, '/post/20');
});

app.get('/network_error', function (req, res) {
  res.restfulEnd(500, { message: 'status 500 doesn`t return output.' });
});

app.get('/jsonp', function (req, res) {
  res.restfulEnd(200, { message: 'JSON with padding' }, { jsonp: true });
});

app.get('/no_content', function (req, res) {
  res.restfulEnd(204, { message: 'status 204 doesn`t return output.' });
});

app.listen(3000);