// in sublime
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/test', function (req, res) {
 res.send(JSON.stringify({ Hello: 'World'}));
});
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/index.html');
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
