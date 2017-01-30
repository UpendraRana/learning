var express = require('express');
var app = express();
var port = process.env.port || 5000;


app.use(express.static('client'));
app.set('views', './client');
app.get('/', function (req, res) {
    res.render('index');
});


app.listen(port, function (err) {
    console.log('runnig port on ' + port);
});